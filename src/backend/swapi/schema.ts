export interface Film {
  title: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
}

export interface Species {
  name: string;
  average_lifespan: string;
  classification: string;
  language: string;
  url: string;
}

export interface Planet {
  name: string;
  terrain: string;
  population: number;
  url: string;
}

export interface PeopleBase {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  birth_year: string;
  url: string;
  imageUrl: string;
}
export interface People extends PeopleBase {
  homeworld: Planet | null;
  species: Species[];
  films: Film[];
}
export interface SwapiPeople extends PeopleBase {
  homeworld: string;
  species: string[];
  films: string[];
}
export interface SwapiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiPeople[];
}
