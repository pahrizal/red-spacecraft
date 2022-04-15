import fetch, { RequestInit } from "node-fetch-commonjs";
import {
  Film,
  People,
  Planet,
  Species,
  SwapiPeople,
  SwapiResponse,
} from "./schema";

export class Swapi {
  private BASE_URL = "https://swapi.dev/api";

  // simple memory cache, without expire time or any other fancy stuff
  memoryCache: { [key: string]: any } = {};

  // Fetch helper function to get data from swapi or cache
  private async Fetch<T>(url: string, options?: RequestInit): Promise<T> {
    const defaultOptions = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    // try to get from cache and return if found
    const cached = this.getFromCache(url);
    if (cached) {
      return cached;
    }

    // we don't hit the cache, so fetch from swapi
    const response = await fetch(url, options || defaultOptions);
    const json = (await response.json()) as T;

    // add response to cache
    this.addToCache(url, json);
    return json as T;
  }

  /**
   * a function to remove unecessary trailing end slashes from URLs
   * @param url URL to clean up
   * @returns
   */
  private normalizeUrl = (url: string) => url.replace(/\/$/, "");

  /**
   * a function to get people id from the url
   * @param url:string the people url
   * @returns number
   */
  private getPeopleId(url: string): number {
    return Number(this.normalizeUrl(url).split("/").pop());
  }

  /**
   * a function to generate image url for the people
   * @param url:string the people url
   * @returns string
   */
  private getPeopleImageUrl(url: string): string {
    const peopleId = this.getPeopleId(url);
    return `https://starwars-visualguide.com/assets/img/characters/${peopleId}.jpg`;
  }

  /**
   * add response to cache
   * @param url:string url to cache
   * @param value:any cache value
   */
  private addToCache(url: string, value: any) {
    const cleanUrl = this.normalizeUrl(url);
    this.memoryCache[cleanUrl] = value;
  }

  /**
   * get response from cache
   * @param url:string the url to get from cache
   * @returns any
   *
   */
  private getFromCache(url: string): any {
    const cleanUrl = this.normalizeUrl(url);
    if (this.memoryCache[cleanUrl]) {
      console.log("cache hit", cleanUrl);
      return this.memoryCache[cleanUrl];
    }
    return null;
  }

  /**
   * get people data from SWAPI
   * @param id people id
   * @returns
   */
  async getSwapiPeople(id: number): Promise<SwapiPeople> {
    console.time("getSwapiPeople");
    const path = `${this.BASE_URL}/people/${id}`;
    const people = await this.Fetch<SwapiPeople>(path);
    console.timeEnd("getSwapiPeople");
    return people;
  }

  /**
   * get flatened people data from SWAPI
   * @param id people id based on SWAPI
   * @returns
   */
  async getPeopleById(id: number): Promise<People> {
    console.time("getPeople");
    const path = `${this.BASE_URL}/people/${id}`;
    const people = await this.Fetch<SwapiPeople>(path);
    const flatenedPeople = await this.flattenPeople(people);
    console.timeEnd("getPeople");
    return flatenedPeople;
  }

  /**
   * get all people raw data from SWAPI
   * @returns Promise<SwapiPeople[]>
   */
  async getAllSwapiPeople(): Promise<SwapiPeople[]> {
    console.time("getAllPeople");
    const url = `${this.BASE_URL}/people`;
    const peoples = await this.Fetch<SwapiResponse>(url);
    // count total pages left, excluding the first request
    const totalPages = Math.ceil(peoples.count / 10);

    // we start with the second page, because the first page is already in the cache
    const promises: Promise<SwapiResponse>[] = [];
    for (let i = 2; i <= totalPages; i++) {
      const request = this.Fetch<SwapiResponse>(`${url}?page=${i}`);
      promises.push(request);
    }

    // wait for all requests to finish
    const allResponse = await Promise.all(promises);
    // add fist response to allResponse
    allResponse.unshift(peoples);
    // flatten all responses into SwapiPeople[]
    const allPeoplesResponse = allResponse.reduce(
      (acc: SwapiPeople[], cur) => acc.concat(cur.results),
      []
    );

    // create a cache key for all pages
    allPeoplesResponse.forEach((people) => {
      const url = people.url + "";
      // add to cache
      this.addToCache(url, people);
    });
    console.timeEnd("getAllPeople");
    return allPeoplesResponse.map((p) => {
      return {
        ...p,
        id: this.getPeopleId(p.url),
        imageUrl: this.getPeopleImageUrl(p.url),
      };
    });
  }

  /**
   * get flatened Planet from SWAPI
   * @param url:string the planet URL
   * @returns Promise<Planet>
   */
  async getPlanetByUrl(url: string): Promise<Planet | null> {
    if (!url) return null;
    console.time("getPlanetByUrl");
    const planet = await this.Fetch<Planet>(url);
    console.timeEnd("getPlanetByUrl");
    return planet;
  }

  /**
   * get flatened Planet from SWAPI
   * @param urls:string[] the planet URLs
   * @returns Promise<Planet[]>
   */
  async getPlanetByUrls(urls: string[]): Promise<Planet[]> {
    if (!urls.length) return [];
    console.time("getPlanetByUrls");
    const promises = urls.map((url) => this.Fetch<Planet>(url));
    const planets = await Promise.all(promises);
    console.timeEnd("getPlanetByUrls");
    return planets;
  }

  /**
   * get flatened Planet by Id from SWAPI
   * @param id:number the planet id
   * @returns Promise<Planet>
   */
  async getPlanetById(id: number): Promise<Planet | null> {
    console.time("getPlanetById");
    const planet = await this.Fetch<Planet>(`${this.BASE_URL}/planets/${id}`);
    console.timeEnd("getPlanetById");
    return planet;
  }

  /**
   * get flatened Species from SWAPI species URLs
   * @param urls:string[] the species URLs
   * @returns Promise<Species[]>
   */
  async getSpeciesByUrls(urls: string[]): Promise<Species[]> {
    if (urls.length === 0) return [];
    console.time("getSpeciesByUrls");
    const promises = urls.map((url) => this.Fetch<Species>(url));
    const species = await Promise.all(promises);
    console.timeEnd("getSpeciesByUrls");
    return species;
  }

  /**
   * get flatened Species from SWAPI by id
   * @param id:number the species id
   * @returns Promise<Species>
   */
  async getSpeciesById(id: number): Promise<Species> {
    console.time("getSpeciesById");
    const species = await this.Fetch<Species>(`${this.BASE_URL}/species/${id}`);
    console.timeEnd("getSpeciesById");
    return species;
  }

  /**
   * get flatened films from SWAPI film urls
   * @param filmUrls:string[] the film urls
   * @returns Promise<Film[]>
   */
  async getFilmsByUrls(filmUrls: string[]): Promise<Film[]> {
    if (filmUrls.length === 0) return [];
    console.time("getFilmsByUrls");
    const promises = filmUrls.map((url) => this.Fetch<Film>(url));
    const films = await Promise.all(promises);
    console.timeEnd("getFilmsByUrls");
    return films;
  }

  /**
   * get flatened films from SWAPI film id
   * @param id:number the species id
   * @returns Promise<Species>
   */
  async getFilmsById(id: number): Promise<Film> {
    console.time("getFilmsById");
    const films = await this.Fetch<Film>(`${this.BASE_URL}/films/${id}`);
    console.timeEnd("getFilmsById");
    return films;
  }

  /**
   * flatten swapi people data to our people data
   * @param people raw data from SWAPI
   * @returns
   */
  private async flattenPeople(people: SwapiPeople): Promise<People> {
    const flatenedPlanet = await this.getPlanetByUrl(people.homeworld);
    const flatenedSpecies = await this.getSpeciesByUrls(people.species);
    const flatenedFilms = await this.getFilmsByUrls(people.films);

    return {
      id: this.getPeopleId(people.url),
      name: people.name,
      height: people.height,
      mass: people.mass,
      hair_color: people.hair_color,
      skin_color: people.skin_color,
      gender: people.gender,
      birth_year: people.birth_year,
      url: people.url,
      homeworld: flatenedPlanet,
      species: flatenedSpecies,
      films: flatenedFilms,
      imageUrl: this.getPeopleImageUrl(people.url),
    };
  }
}

export default new Swapi();
