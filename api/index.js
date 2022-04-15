/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backend/api/films/controller.ts":
/*!*********************************************!*\
  !*** ./src/backend/api/films/controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const swapi_1 = __importDefault(__webpack_require__(/*! ../../swapi */ "./src/backend/swapi/index.ts"));
class FilmsController {
    async getById(req, res) {
        const result = await swapi_1.default.getFilmsById(req.params.id);
        if (!result)
            return;
        res.json(result);
    }
    async getAll(req, res) {
        const peoples = await swapi_1.default.getAllSwapiPeople();
        // flatten species url from peoples
        const filmUrls = peoples.reduce((acc, cur) => acc.concat(cur.films), []);
        // remove duplicate
        const urls = [...new Set(filmUrls)];
        // prepare results
        const results = await swapi_1.default.getFilmsByUrls(urls);
        res.json(results);
    }
}
exports["default"] = new FilmsController();


/***/ }),

/***/ "./src/backend/api/films/route.ts":
/*!****************************************!*\
  !*** ./src/backend/api/films/route.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const controller_1 = __importDefault(__webpack_require__(/*! ./controller */ "./src/backend/api/films/controller.ts"));
const router = express_1.default.Router();
router.get("/films", controller_1.default.getAll);
router.get("/films/:id", controller_1.default.getById);
exports["default"] = router;


/***/ }),

/***/ "./src/backend/api/person/controller.ts":
/*!**********************************************!*\
  !*** ./src/backend/api/person/controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const swapi_1 = __importDefault(__webpack_require__(/*! ../../swapi */ "./src/backend/swapi/index.ts"));
class PersonController {
    async getById(req, res) {
        const people = await swapi_1.default.getSwapiPeople(req.params.id);
        res.json(people);
    }
    async getAll(req, res) {
        const peoples = await swapi_1.default.getAllSwapiPeople();
        res.json(peoples);
    }
}
exports["default"] = new PersonController();


/***/ }),

/***/ "./src/backend/api/person/route.ts":
/*!*****************************************!*\
  !*** ./src/backend/api/person/route.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const controller_1 = __importDefault(__webpack_require__(/*! ./controller */ "./src/backend/api/person/controller.ts"));
const router = express_1.default.Router();
router.get("/person", controller_1.default.getAll);
router.get("/person/:id", controller_1.default.getById);
exports["default"] = router;


/***/ }),

/***/ "./src/backend/api/planet/controller.ts":
/*!**********************************************!*\
  !*** ./src/backend/api/planet/controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const swapi_1 = __importDefault(__webpack_require__(/*! ../../swapi */ "./src/backend/swapi/index.ts"));
class PlanetController {
    async getById(req, res) {
        const result = await swapi_1.default.getPlanetById(req.params.id);
        if (!result)
            return;
        res.json(result);
    }
    async getAll(req, res) {
        const peoples = await swapi_1.default.getAllSwapiPeople();
        // get all planets from peoples planet urls (remove duplicate)
        const urls = [...new Set(peoples.map((p) => p.homeworld))];
        const results = await swapi_1.default.getPlanetByUrls(urls);
        res.json(results);
    }
}
exports["default"] = new PlanetController();


/***/ }),

/***/ "./src/backend/api/planet/route.ts":
/*!*****************************************!*\
  !*** ./src/backend/api/planet/route.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const controller_1 = __importDefault(__webpack_require__(/*! ./controller */ "./src/backend/api/planet/controller.ts"));
const router = express_1.default.Router();
router.get("/planet", controller_1.default.getAll);
router.get("/planet/:id", controller_1.default.getById);
exports["default"] = router;


/***/ }),

/***/ "./src/backend/api/species/controller.ts":
/*!***********************************************!*\
  !*** ./src/backend/api/species/controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const swapi_1 = __importDefault(__webpack_require__(/*! ../../swapi */ "./src/backend/swapi/index.ts"));
class SpeciesController {
    async getById(req, res) {
        const result = await swapi_1.default.getSpeciesById(req.params.id);
        if (!result)
            return;
        res.json(result);
    }
    async getAll(req, res) {
        const peoples = await swapi_1.default.getAllSwapiPeople();
        // flatten species url from peoples
        const speciesUrls = peoples.reduce((acc, cur) => acc.concat(cur.species), []);
        // remove duplicate
        const urls = [...new Set(speciesUrls)];
        // prepare results
        const results = await swapi_1.default.getSpeciesByUrls(urls);
        res.json(results);
    }
}
exports["default"] = new SpeciesController();


/***/ }),

/***/ "./src/backend/api/species/route.ts":
/*!******************************************!*\
  !*** ./src/backend/api/species/route.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const controller_1 = __importDefault(__webpack_require__(/*! ./controller */ "./src/backend/api/species/controller.ts"));
const router = express_1.default.Router();
router.get("/species", controller_1.default.getAll);
router.get("/species/:id", controller_1.default.getById);
exports["default"] = router;


/***/ }),

/***/ "./src/backend/index.ts":
/*!******************************!*\
  !*** ./src/backend/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const route_1 = __importDefault(__webpack_require__(/*! ./api/person/route */ "./src/backend/api/person/route.ts"));
const route_2 = __importDefault(__webpack_require__(/*! ./api/planet/route */ "./src/backend/api/planet/route.ts"));
const route_3 = __importDefault(__webpack_require__(/*! ./api/species/route */ "./src/backend/api/species/route.ts"));
const route_4 = __importDefault(__webpack_require__(/*! ./api/films/route */ "./src/backend/api/films/route.ts"));
const BUILD_DIR = path_1.default.join(process.cwd() + "/build");
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
// parse application/json
app.use(body_parser_1.default.json());
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
// serve API endpoints
app.use("/api", [route_1.default, route_2.default, route_3.default, route_4.default]);
// serve static files from frontend build folder
app.use(express_1.default.static(BUILD_DIR));
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(BUILD_DIR, "index.html"));
});
// start express server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});


/***/ }),

/***/ "./src/backend/swapi/index.ts":
/*!************************************!*\
  !*** ./src/backend/swapi/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Swapi = void 0;
const node_fetch_commonjs_1 = __importDefault(__webpack_require__(/*! node-fetch-commonjs */ "node-fetch-commonjs"));
class Swapi {
    BASE_URL = "https://swapi.dev/api";
    // simple memory cache, without expire time or any other fancy stuff
    memoryCache = {};
    // Fetch helper function to get data from swapi or cache
    async Fetch(url, options) {
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
        const response = await (0, node_fetch_commonjs_1.default)(url, options || defaultOptions);
        const json = (await response.json());
        // add response to cache
        this.addToCache(url, json);
        return json;
    }
    /**
     * add response to cache
     * @param url:string url to cache
     * @param value:any cache value
     */
    addToCache(url, value) {
        const cleanUrl = url.replace(/\/$/, "");
        this.memoryCache[cleanUrl] = value;
    }
    /**
     * get response from cache
     * @param url:string the url to get from cache
     * @returns any
     *
     */
    getFromCache(url) {
        const cleanUrl = url.replace(/\/$/, "");
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
    async getSwapiPeople(id) {
        console.time("getSwapiPeople");
        const path = `${this.BASE_URL}/people/${id}`;
        const people = await this.Fetch(path);
        console.timeEnd("getSwapiPeople");
        return people;
    }
    /**
     * get flatened people data from SWAPI
     * @param id people id based on SWAPI
     * @returns
     */
    async getPeopleById(id) {
        console.time("getPeople");
        const path = `${this.BASE_URL}/people/${id}`;
        const people = await this.Fetch(path);
        const flatenedPeople = await this.flattenPeople(people);
        console.timeEnd("getPeople");
        return flatenedPeople;
    }
    /**
     * get all people raw data from SWAPI
     * @returns Promise<SwapiPeople[]>
     */
    async getAllSwapiPeople() {
        console.time("getAllPeople");
        const url = `${this.BASE_URL}/people`;
        const peoples = await this.Fetch(url);
        // count total pages left, excluding the first request
        const totalPages = Math.ceil(peoples.count / 10);
        // we start with the second page, because the first page is already in the cache
        const promises = [];
        for (let i = 2; i <= totalPages; i++) {
            const request = this.Fetch(`${url}?page=${i}`);
            promises.push(request);
        }
        // wait for all requests to finish
        const allResponse = await Promise.all(promises);
        // add fist response to allResponse
        allResponse.unshift(peoples);
        // flatten all responses into SwapiPeople[]
        const allPeoplesResponse = allResponse.reduce((acc, cur) => acc.concat(cur.results), []);
        // create a cache key for all pages
        allPeoplesResponse.forEach((people) => {
            const url = people.url + "";
            // add to cache
            this.addToCache(url, people);
        });
        console.timeEnd("getAllPeople");
        return allPeoplesResponse;
    }
    /**
     * get flatened Planet from SWAPI
     * @param url:string the planet URL
     * @returns Promise<Planet>
     */
    async getPlanetByUrl(url) {
        if (!url)
            return null;
        console.time("getPlanetByUrl");
        const planet = await this.Fetch(url);
        console.timeEnd("getPlanetByUrl");
        return planet;
    }
    /**
     * get flatened Planet from SWAPI
     * @param urls:string[] the planet URLs
     * @returns Promise<Planet[]>
     */
    async getPlanetByUrls(urls) {
        if (!urls.length)
            return [];
        console.time("getPlanetByUrls");
        const promises = urls.map((url) => this.Fetch(url));
        const planets = await Promise.all(promises);
        console.timeEnd("getPlanetByUrls");
        return planets;
    }
    /**
     * get flatened Planet by Id from SWAPI
     * @param id:number the planet id
     * @returns Promise<Planet>
     */
    async getPlanetById(id) {
        console.time("getPlanetById");
        const planet = await this.Fetch(`${this.BASE_URL}/planets/${id}`);
        console.timeEnd("getPlanetById");
        return planet;
    }
    /**
     * get flatened Species from SWAPI species URLs
     * @param urls:string[] the species URLs
     * @returns Promise<Species[]>
     */
    async getSpeciesByUrls(urls) {
        if (urls.length === 0)
            return [];
        console.time("getSpeciesByUrls");
        const promises = urls.map((url) => this.Fetch(url));
        const species = await Promise.all(promises);
        console.timeEnd("getSpeciesByUrls");
        return species;
    }
    /**
     * get flatened Species from SWAPI by id
     * @param id:number the species id
     * @returns Promise<Species>
     */
    async getSpeciesById(id) {
        console.time("getSpeciesById");
        const species = await this.Fetch(`${this.BASE_URL}/species/${id}`);
        console.timeEnd("getSpeciesById");
        return species;
    }
    /**
     * get flatened films from SWAPI film urls
     * @param filmUrls:string[] the film urls
     * @returns Promise<Film[]>
     */
    async getFilmsByUrls(filmUrls) {
        if (filmUrls.length === 0)
            return [];
        console.time("getFilmsByUrls");
        const promises = filmUrls.map((url) => this.Fetch(url));
        const films = await Promise.all(promises);
        console.timeEnd("getFilmsByUrls");
        return films;
    }
    /**
     * get flatened films from SWAPI film id
     * @param id:number the species id
     * @returns Promise<Species>
     */
    async getFilmsById(id) {
        console.time("getFilmsById");
        const films = await this.Fetch(`${this.BASE_URL}/films/${id}`);
        console.timeEnd("getFilmsById");
        return films;
    }
    /**
     * flatten swapi people data to our people data
     * @param people raw data from SWAPI
     * @returns
     */
    async flattenPeople(people) {
        const flatenedPlanet = await this.getPlanetByUrl(people.homeworld);
        const flatenedSpecies = await this.getSpeciesByUrls(people.species);
        const flatenedFilms = await this.getFilmsByUrls(people.films);
        return {
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
        };
    }
}
exports.Swapi = Swapi;
exports["default"] = new Swapi();


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "node-fetch-commonjs":
/*!**************************************!*\
  !*** external "node-fetch-commonjs" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("node-fetch-commonjs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/backend/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsMkNBQTJDLGNBQWMsV0FBVyxHQUFHO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjLFdBQVcsR0FBRztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYyxTQUFTLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGtCQUFlOzs7Ozs7Ozs7OztBQ2hPZjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZC1zcGFjZXNjcmFmdC8uL3NyYy9iYWNrZW5kL2FwaS9maWxtcy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JlZC1zcGFjZXNjcmFmdC8uL3NyYy9iYWNrZW5kL2FwaS9maWxtcy9yb3V0ZS50cyIsIndlYnBhY2s6Ly9yZWQtc3BhY2VzY3JhZnQvLi9zcmMvYmFja2VuZC9hcGkvcGVyc29uL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcmVkLXNwYWNlc2NyYWZ0Ly4vc3JjL2JhY2tlbmQvYXBpL3BlcnNvbi9yb3V0ZS50cyIsIndlYnBhY2s6Ly9yZWQtc3BhY2VzY3JhZnQvLi9zcmMvYmFja2VuZC9hcGkvcGxhbmV0L2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcmVkLXNwYWNlc2NyYWZ0Ly4vc3JjL2JhY2tlbmQvYXBpL3BsYW5ldC9yb3V0ZS50cyIsIndlYnBhY2s6Ly9yZWQtc3BhY2VzY3JhZnQvLi9zcmMvYmFja2VuZC9hcGkvc3BlY2llcy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3JlZC1zcGFjZXNjcmFmdC8uL3NyYy9iYWNrZW5kL2FwaS9zcGVjaWVzL3JvdXRlLnRzIiwid2VicGFjazovL3JlZC1zcGFjZXNjcmFmdC8uL3NyYy9iYWNrZW5kL2luZGV4LnRzIiwid2VicGFjazovL3JlZC1zcGFjZXNjcmFmdC8uL3NyYy9iYWNrZW5kL3N3YXBpL2luZGV4LnRzIiwid2VicGFjazovL3JlZC1zcGFjZXNjcmFmdC9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vcmVkLXNwYWNlc2NyYWZ0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL3JlZC1zcGFjZXNjcmFmdC9leHRlcm5hbCBjb21tb25qcyBcIm5vZGUtZmV0Y2gtY29tbW9uanNcIiIsIndlYnBhY2s6Ly9yZWQtc3BhY2VzY3JhZnQvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9yZWQtc3BhY2VzY3JhZnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkLXNwYWNlc2NyYWZ0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVkLXNwYWNlc2NyYWZ0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZWQtc3BhY2VzY3JhZnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3dhcGlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vc3dhcGlcIikpO1xuY2xhc3MgRmlsbXNDb250cm9sbGVyIHtcbiAgICBhc3luYyBnZXRCeUlkKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN3YXBpXzEuZGVmYXVsdC5nZXRGaWxtc0J5SWQocmVxLnBhcmFtcy5pZCk7XG4gICAgICAgIGlmICghcmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXMuanNvbihyZXN1bHQpO1xuICAgIH1cbiAgICBhc3luYyBnZXRBbGwocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgcGVvcGxlcyA9IGF3YWl0IHN3YXBpXzEuZGVmYXVsdC5nZXRBbGxTd2FwaVBlb3BsZSgpO1xuICAgICAgICAvLyBmbGF0dGVuIHNwZWNpZXMgdXJsIGZyb20gcGVvcGxlc1xuICAgICAgICBjb25zdCBmaWxtVXJscyA9IHBlb3BsZXMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjLmNvbmNhdChjdXIuZmlsbXMpLCBbXSk7XG4gICAgICAgIC8vIHJlbW92ZSBkdXBsaWNhdGVcbiAgICAgICAgY29uc3QgdXJscyA9IFsuLi5uZXcgU2V0KGZpbG1VcmxzKV07XG4gICAgICAgIC8vIHByZXBhcmUgcmVzdWx0c1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgc3dhcGlfMS5kZWZhdWx0LmdldEZpbG1zQnlVcmxzKHVybHMpO1xuICAgICAgICByZXMuanNvbihyZXN1bHRzKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgRmlsbXNDb250cm9sbGVyKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG5jb25zdCBjb250cm9sbGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29udHJvbGxlclwiKSk7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzXzEuZGVmYXVsdC5Sb3V0ZXIoKTtcbnJvdXRlci5nZXQoXCIvZmlsbXNcIiwgY29udHJvbGxlcl8xLmRlZmF1bHQuZ2V0QWxsKTtcbnJvdXRlci5nZXQoXCIvZmlsbXMvOmlkXCIsIGNvbnRyb2xsZXJfMS5kZWZhdWx0LmdldEJ5SWQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm91dGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzd2FwaV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9zd2FwaVwiKSk7XG5jbGFzcyBQZXJzb25Db250cm9sbGVyIHtcbiAgICBhc3luYyBnZXRCeUlkKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBlb3BsZSA9IGF3YWl0IHN3YXBpXzEuZGVmYXVsdC5nZXRTd2FwaVBlb3BsZShyZXEucGFyYW1zLmlkKTtcbiAgICAgICAgcmVzLmpzb24ocGVvcGxlKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0QWxsKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHBlb3BsZXMgPSBhd2FpdCBzd2FwaV8xLmRlZmF1bHQuZ2V0QWxsU3dhcGlQZW9wbGUoKTtcbiAgICAgICAgcmVzLmpzb24ocGVvcGxlcyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IFBlcnNvbkNvbnRyb2xsZXIoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbmNvbnN0IGNvbnRyb2xsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb250cm9sbGVyXCIpKTtcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3NfMS5kZWZhdWx0LlJvdXRlcigpO1xucm91dGVyLmdldChcIi9wZXJzb25cIiwgY29udHJvbGxlcl8xLmRlZmF1bHQuZ2V0QWxsKTtcbnJvdXRlci5nZXQoXCIvcGVyc29uLzppZFwiLCBjb250cm9sbGVyXzEuZGVmYXVsdC5nZXRCeUlkKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJvdXRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3dhcGlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vc3dhcGlcIikpO1xuY2xhc3MgUGxhbmV0Q29udHJvbGxlciB7XG4gICAgYXN5bmMgZ2V0QnlJZChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzd2FwaV8xLmRlZmF1bHQuZ2V0UGxhbmV0QnlJZChyZXEucGFyYW1zLmlkKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJlcy5qc29uKHJlc3VsdCk7XG4gICAgfVxuICAgIGFzeW5jIGdldEFsbChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBwZW9wbGVzID0gYXdhaXQgc3dhcGlfMS5kZWZhdWx0LmdldEFsbFN3YXBpUGVvcGxlKCk7XG4gICAgICAgIC8vIGdldCBhbGwgcGxhbmV0cyBmcm9tIHBlb3BsZXMgcGxhbmV0IHVybHMgKHJlbW92ZSBkdXBsaWNhdGUpXG4gICAgICAgIGNvbnN0IHVybHMgPSBbLi4ubmV3IFNldChwZW9wbGVzLm1hcCgocCkgPT4gcC5ob21ld29ybGQpKV07XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzd2FwaV8xLmRlZmF1bHQuZ2V0UGxhbmV0QnlVcmxzKHVybHMpO1xuICAgICAgICByZXMuanNvbihyZXN1bHRzKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgUGxhbmV0Q29udHJvbGxlcigpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBleHByZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV4cHJlc3NcIikpO1xuY29uc3QgY29udHJvbGxlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJcIikpO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzc18xLmRlZmF1bHQuUm91dGVyKCk7XG5yb3V0ZXIuZ2V0KFwiL3BsYW5ldFwiLCBjb250cm9sbGVyXzEuZGVmYXVsdC5nZXRBbGwpO1xucm91dGVyLmdldChcIi9wbGFuZXQvOmlkXCIsIGNvbnRyb2xsZXJfMS5kZWZhdWx0LmdldEJ5SWQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm91dGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzd2FwaV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9zd2FwaVwiKSk7XG5jbGFzcyBTcGVjaWVzQ29udHJvbGxlciB7XG4gICAgYXN5bmMgZ2V0QnlJZChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzd2FwaV8xLmRlZmF1bHQuZ2V0U3BlY2llc0J5SWQocmVxLnBhcmFtcy5pZCk7XG4gICAgICAgIGlmICghcmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXMuanNvbihyZXN1bHQpO1xuICAgIH1cbiAgICBhc3luYyBnZXRBbGwocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgcGVvcGxlcyA9IGF3YWl0IHN3YXBpXzEuZGVmYXVsdC5nZXRBbGxTd2FwaVBlb3BsZSgpO1xuICAgICAgICAvLyBmbGF0dGVuIHNwZWNpZXMgdXJsIGZyb20gcGVvcGxlc1xuICAgICAgICBjb25zdCBzcGVjaWVzVXJscyA9IHBlb3BsZXMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjLmNvbmNhdChjdXIuc3BlY2llcyksIFtdKTtcbiAgICAgICAgLy8gcmVtb3ZlIGR1cGxpY2F0ZVxuICAgICAgICBjb25zdCB1cmxzID0gWy4uLm5ldyBTZXQoc3BlY2llc1VybHMpXTtcbiAgICAgICAgLy8gcHJlcGFyZSByZXN1bHRzXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzd2FwaV8xLmRlZmF1bHQuZ2V0U3BlY2llc0J5VXJscyh1cmxzKTtcbiAgICAgICAgcmVzLmpzb24ocmVzdWx0cyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IFNwZWNpZXNDb250cm9sbGVyKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG5jb25zdCBjb250cm9sbGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29udHJvbGxlclwiKSk7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzXzEuZGVmYXVsdC5Sb3V0ZXIoKTtcbnJvdXRlci5nZXQoXCIvc3BlY2llc1wiLCBjb250cm9sbGVyXzEuZGVmYXVsdC5nZXRBbGwpO1xucm91dGVyLmdldChcIi9zcGVjaWVzLzppZFwiLCBjb250cm9sbGVyXzEuZGVmYXVsdC5nZXRCeUlkKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJvdXRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYm9keV9wYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYm9keS1wYXJzZXJcIikpO1xuY29uc3QgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbmNvbnN0IHBhdGhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicGF0aFwiKSk7XG5jb25zdCByb3V0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FwaS9wZXJzb24vcm91dGVcIikpO1xuY29uc3Qgcm91dGVfMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hcGkvcGxhbmV0L3JvdXRlXCIpKTtcbmNvbnN0IHJvdXRlXzMgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYXBpL3NwZWNpZXMvcm91dGVcIikpO1xuY29uc3Qgcm91dGVfNCA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hcGkvZmlsbXMvcm91dGVcIikpO1xuY29uc3QgQlVJTERfRElSID0gcGF0aF8xLmRlZmF1bHQuam9pbihwcm9jZXNzLmN3ZCgpICsgXCIvYnVpbGRcIik7XG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAxO1xuY29uc3QgYXBwID0gKDAsIGV4cHJlc3NfMS5kZWZhdWx0KSgpO1xuLy8gcGFyc2UgYXBwbGljYXRpb24vanNvblxuYXBwLnVzZShib2R5X3BhcnNlcl8xLmRlZmF1bHQuanNvbigpKTtcbi8vIHBhcnNlIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFxuYXBwLnVzZShib2R5X3BhcnNlcl8xLmRlZmF1bHQudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbi8vIHNlcnZlIEFQSSBlbmRwb2ludHNcbmFwcC51c2UoXCIvYXBpXCIsIFtyb3V0ZV8xLmRlZmF1bHQsIHJvdXRlXzIuZGVmYXVsdCwgcm91dGVfMy5kZWZhdWx0LCByb3V0ZV80LmRlZmF1bHRdKTtcbi8vIHNlcnZlIHN0YXRpYyBmaWxlcyBmcm9tIGZyb250ZW5kIGJ1aWxkIGZvbGRlclxuYXBwLnVzZShleHByZXNzXzEuZGVmYXVsdC5zdGF0aWMoQlVJTERfRElSKSk7XG5hcHAuZ2V0KFwiLypcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmRGaWxlKHBhdGhfMS5kZWZhdWx0LmpvaW4oQlVJTERfRElSLCBcImluZGV4Lmh0bWxcIikpO1xufSk7XG4vLyBzdGFydCBleHByZXNzIHNlcnZlclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYEFwcCBsaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9IWApO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3dhcGkgPSB2b2lkIDA7XG5jb25zdCBub2RlX2ZldGNoX2NvbW1vbmpzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5vZGUtZmV0Y2gtY29tbW9uanNcIikpO1xuY2xhc3MgU3dhcGkge1xuICAgIEJBU0VfVVJMID0gXCJodHRwczovL3N3YXBpLmRldi9hcGlcIjtcbiAgICAvLyBzaW1wbGUgbWVtb3J5IGNhY2hlLCB3aXRob3V0IGV4cGlyZSB0aW1lIG9yIGFueSBvdGhlciBmYW5jeSBzdHVmZlxuICAgIG1lbW9yeUNhY2hlID0ge307XG4gICAgLy8gRmV0Y2ggaGVscGVyIGZ1bmN0aW9uIHRvIGdldCBkYXRhIGZyb20gc3dhcGkgb3IgY2FjaGVcbiAgICBhc3luYyBGZXRjaCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRyeSB0byBnZXQgZnJvbSBjYWNoZSBhbmQgcmV0dXJuIGlmIGZvdW5kXG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IHRoaXMuZ2V0RnJvbUNhY2hlKHVybCk7XG4gICAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgZG9uJ3QgaGl0IHRoZSBjYWNoZSwgc28gZmV0Y2ggZnJvbSBzd2FwaVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0ICgwLCBub2RlX2ZldGNoX2NvbW1vbmpzXzEuZGVmYXVsdCkodXJsLCBvcHRpb25zIHx8IGRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgY29uc3QganNvbiA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpO1xuICAgICAgICAvLyBhZGQgcmVzcG9uc2UgdG8gY2FjaGVcbiAgICAgICAgdGhpcy5hZGRUb0NhY2hlKHVybCwganNvbik7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBhZGQgcmVzcG9uc2UgdG8gY2FjaGVcbiAgICAgKiBAcGFyYW0gdXJsOnN0cmluZyB1cmwgdG8gY2FjaGVcbiAgICAgKiBAcGFyYW0gdmFsdWU6YW55IGNhY2hlIHZhbHVlXG4gICAgICovXG4gICAgYWRkVG9DYWNoZSh1cmwsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGNsZWFuVXJsID0gdXJsLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgICAgICAgdGhpcy5tZW1vcnlDYWNoZVtjbGVhblVybF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IHJlc3BvbnNlIGZyb20gY2FjaGVcbiAgICAgKiBAcGFyYW0gdXJsOnN0cmluZyB0aGUgdXJsIHRvIGdldCBmcm9tIGNhY2hlXG4gICAgICogQHJldHVybnMgYW55XG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRGcm9tQ2FjaGUodXJsKSB7XG4gICAgICAgIGNvbnN0IGNsZWFuVXJsID0gdXJsLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgICAgICAgaWYgKHRoaXMubWVtb3J5Q2FjaGVbY2xlYW5VcmxdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhY2hlIGhpdFwiLCBjbGVhblVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZW1vcnlDYWNoZVtjbGVhblVybF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCBwZW9wbGUgZGF0YSBmcm9tIFNXQVBJXG4gICAgICogQHBhcmFtIGlkIHBlb3BsZSBpZFxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgYXN5bmMgZ2V0U3dhcGlQZW9wbGUoaWQpIHtcbiAgICAgICAgY29uc29sZS50aW1lKFwiZ2V0U3dhcGlQZW9wbGVcIik7XG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHt0aGlzLkJBU0VfVVJMfS9wZW9wbGUvJHtpZH1gO1xuICAgICAgICBjb25zdCBwZW9wbGUgPSBhd2FpdCB0aGlzLkZldGNoKHBhdGgpO1xuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJnZXRTd2FwaVBlb3BsZVwiKTtcbiAgICAgICAgcmV0dXJuIHBlb3BsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IGZsYXRlbmVkIHBlb3BsZSBkYXRhIGZyb20gU1dBUElcbiAgICAgKiBAcGFyYW0gaWQgcGVvcGxlIGlkIGJhc2VkIG9uIFNXQVBJXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhc3luYyBnZXRQZW9wbGVCeUlkKGlkKSB7XG4gICAgICAgIGNvbnNvbGUudGltZShcImdldFBlb3BsZVwiKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke3RoaXMuQkFTRV9VUkx9L3Blb3BsZS8ke2lkfWA7XG4gICAgICAgIGNvbnN0IHBlb3BsZSA9IGF3YWl0IHRoaXMuRmV0Y2gocGF0aCk7XG4gICAgICAgIGNvbnN0IGZsYXRlbmVkUGVvcGxlID0gYXdhaXQgdGhpcy5mbGF0dGVuUGVvcGxlKHBlb3BsZSk7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZChcImdldFBlb3BsZVwiKTtcbiAgICAgICAgcmV0dXJuIGZsYXRlbmVkUGVvcGxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgYWxsIHBlb3BsZSByYXcgZGF0YSBmcm9tIFNXQVBJXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTd2FwaVBlb3BsZVtdPlxuICAgICAqL1xuICAgIGFzeW5jIGdldEFsbFN3YXBpUGVvcGxlKCkge1xuICAgICAgICBjb25zb2xlLnRpbWUoXCJnZXRBbGxQZW9wbGVcIik7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuQkFTRV9VUkx9L3Blb3BsZWA7XG4gICAgICAgIGNvbnN0IHBlb3BsZXMgPSBhd2FpdCB0aGlzLkZldGNoKHVybCk7XG4gICAgICAgIC8vIGNvdW50IHRvdGFsIHBhZ2VzIGxlZnQsIGV4Y2x1ZGluZyB0aGUgZmlyc3QgcmVxdWVzdFxuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHBlb3BsZXMuY291bnQgLyAxMCk7XG4gICAgICAgIC8vIHdlIHN0YXJ0IHdpdGggdGhlIHNlY29uZCBwYWdlLCBiZWNhdXNlIHRoZSBmaXJzdCBwYWdlIGlzIGFscmVhZHkgaW4gdGhlIGNhY2hlXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuRmV0Y2goYCR7dXJsfT9wYWdlPSR7aX1gKTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2FpdCBmb3IgYWxsIHJlcXVlc3RzIHRvIGZpbmlzaFxuICAgICAgICBjb25zdCBhbGxSZXNwb25zZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgLy8gYWRkIGZpc3QgcmVzcG9uc2UgdG8gYWxsUmVzcG9uc2VcbiAgICAgICAgYWxsUmVzcG9uc2UudW5zaGlmdChwZW9wbGVzKTtcbiAgICAgICAgLy8gZmxhdHRlbiBhbGwgcmVzcG9uc2VzIGludG8gU3dhcGlQZW9wbGVbXVxuICAgICAgICBjb25zdCBhbGxQZW9wbGVzUmVzcG9uc2UgPSBhbGxSZXNwb25zZS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MuY29uY2F0KGN1ci5yZXN1bHRzKSwgW10pO1xuICAgICAgICAvLyBjcmVhdGUgYSBjYWNoZSBrZXkgZm9yIGFsbCBwYWdlc1xuICAgICAgICBhbGxQZW9wbGVzUmVzcG9uc2UuZm9yRWFjaCgocGVvcGxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBwZW9wbGUudXJsICsgXCJcIjtcbiAgICAgICAgICAgIC8vIGFkZCB0byBjYWNoZVxuICAgICAgICAgICAgdGhpcy5hZGRUb0NhY2hlKHVybCwgcGVvcGxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZChcImdldEFsbFBlb3BsZVwiKTtcbiAgICAgICAgcmV0dXJuIGFsbFBlb3BsZXNSZXNwb25zZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IGZsYXRlbmVkIFBsYW5ldCBmcm9tIFNXQVBJXG4gICAgICogQHBhcmFtIHVybDpzdHJpbmcgdGhlIHBsYW5ldCBVUkxcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPFBsYW5ldD5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRQbGFuZXRCeVVybCh1cmwpIHtcbiAgICAgICAgaWYgKCF1cmwpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc29sZS50aW1lKFwiZ2V0UGxhbmV0QnlVcmxcIik7XG4gICAgICAgIGNvbnN0IHBsYW5ldCA9IGF3YWl0IHRoaXMuRmV0Y2godXJsKTtcbiAgICAgICAgY29uc29sZS50aW1lRW5kKFwiZ2V0UGxhbmV0QnlVcmxcIik7XG4gICAgICAgIHJldHVybiBwbGFuZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCBmbGF0ZW5lZCBQbGFuZXQgZnJvbSBTV0FQSVxuICAgICAqIEBwYXJhbSB1cmxzOnN0cmluZ1tdIHRoZSBwbGFuZXQgVVJMc1xuICAgICAqIEByZXR1cm5zIFByb21pc2U8UGxhbmV0W10+XG4gICAgICovXG4gICAgYXN5bmMgZ2V0UGxhbmV0QnlVcmxzKHVybHMpIHtcbiAgICAgICAgaWYgKCF1cmxzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgY29uc29sZS50aW1lKFwiZ2V0UGxhbmV0QnlVcmxzXCIpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHVybHMubWFwKCh1cmwpID0+IHRoaXMuRmV0Y2godXJsKSk7XG4gICAgICAgIGNvbnN0IHBsYW5ldHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZChcImdldFBsYW5ldEJ5VXJsc1wiKTtcbiAgICAgICAgcmV0dXJuIHBsYW5ldHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCBmbGF0ZW5lZCBQbGFuZXQgYnkgSWQgZnJvbSBTV0FQSVxuICAgICAqIEBwYXJhbSBpZDpudW1iZXIgdGhlIHBsYW5ldCBpZFxuICAgICAqIEByZXR1cm5zIFByb21pc2U8UGxhbmV0PlxuICAgICAqL1xuICAgIGFzeW5jIGdldFBsYW5ldEJ5SWQoaWQpIHtcbiAgICAgICAgY29uc29sZS50aW1lKFwiZ2V0UGxhbmV0QnlJZFwiKTtcbiAgICAgICAgY29uc3QgcGxhbmV0ID0gYXdhaXQgdGhpcy5GZXRjaChgJHt0aGlzLkJBU0VfVVJMfS9wbGFuZXRzLyR7aWR9YCk7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZChcImdldFBsYW5ldEJ5SWRcIik7XG4gICAgICAgIHJldHVybiBwbGFuZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCBmbGF0ZW5lZCBTcGVjaWVzIGZyb20gU1dBUEkgc3BlY2llcyBVUkxzXG4gICAgICogQHBhcmFtIHVybHM6c3RyaW5nW10gdGhlIHNwZWNpZXMgVVJMc1xuICAgICAqIEByZXR1cm5zIFByb21pc2U8U3BlY2llc1tdPlxuICAgICAqL1xuICAgIGFzeW5jIGdldFNwZWNpZXNCeVVybHModXJscykge1xuICAgICAgICBpZiAodXJscy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIGNvbnNvbGUudGltZShcImdldFNwZWNpZXNCeVVybHNcIik7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gdXJscy5tYXAoKHVybCkgPT4gdGhpcy5GZXRjaCh1cmwpKTtcbiAgICAgICAgY29uc3Qgc3BlY2llcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgY29uc29sZS50aW1lRW5kKFwiZ2V0U3BlY2llc0J5VXJsc1wiKTtcbiAgICAgICAgcmV0dXJuIHNwZWNpZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCBmbGF0ZW5lZCBTcGVjaWVzIGZyb20gU1dBUEkgYnkgaWRcbiAgICAgKiBAcGFyYW0gaWQ6bnVtYmVyIHRoZSBzcGVjaWVzIGlkXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTcGVjaWVzPlxuICAgICAqL1xuICAgIGFzeW5jIGdldFNwZWNpZXNCeUlkKGlkKSB7XG4gICAgICAgIGNvbnNvbGUudGltZShcImdldFNwZWNpZXNCeUlkXCIpO1xuICAgICAgICBjb25zdCBzcGVjaWVzID0gYXdhaXQgdGhpcy5GZXRjaChgJHt0aGlzLkJBU0VfVVJMfS9zcGVjaWVzLyR7aWR9YCk7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZChcImdldFNwZWNpZXNCeUlkXCIpO1xuICAgICAgICByZXR1cm4gc3BlY2llcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0IGZsYXRlbmVkIGZpbG1zIGZyb20gU1dBUEkgZmlsbSB1cmxzXG4gICAgICogQHBhcmFtIGZpbG1VcmxzOnN0cmluZ1tdIHRoZSBmaWxtIHVybHNcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPEZpbG1bXT5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRGaWxtc0J5VXJscyhmaWxtVXJscykge1xuICAgICAgICBpZiAoZmlsbVVybHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICBjb25zb2xlLnRpbWUoXCJnZXRGaWxtc0J5VXJsc1wiKTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBmaWxtVXJscy5tYXAoKHVybCkgPT4gdGhpcy5GZXRjaCh1cmwpKTtcbiAgICAgICAgY29uc3QgZmlsbXMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZChcImdldEZpbG1zQnlVcmxzXCIpO1xuICAgICAgICByZXR1cm4gZmlsbXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCBmbGF0ZW5lZCBmaWxtcyBmcm9tIFNXQVBJIGZpbG0gaWRcbiAgICAgKiBAcGFyYW0gaWQ6bnVtYmVyIHRoZSBzcGVjaWVzIGlkXG4gICAgICogQHJldHVybnMgUHJvbWlzZTxTcGVjaWVzPlxuICAgICAqL1xuICAgIGFzeW5jIGdldEZpbG1zQnlJZChpZCkge1xuICAgICAgICBjb25zb2xlLnRpbWUoXCJnZXRGaWxtc0J5SWRcIik7XG4gICAgICAgIGNvbnN0IGZpbG1zID0gYXdhaXQgdGhpcy5GZXRjaChgJHt0aGlzLkJBU0VfVVJMfS9maWxtcy8ke2lkfWApO1xuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJnZXRGaWxtc0J5SWRcIik7XG4gICAgICAgIHJldHVybiBmaWxtcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogZmxhdHRlbiBzd2FwaSBwZW9wbGUgZGF0YSB0byBvdXIgcGVvcGxlIGRhdGFcbiAgICAgKiBAcGFyYW0gcGVvcGxlIHJhdyBkYXRhIGZyb20gU1dBUElcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGFzeW5jIGZsYXR0ZW5QZW9wbGUocGVvcGxlKSB7XG4gICAgICAgIGNvbnN0IGZsYXRlbmVkUGxhbmV0ID0gYXdhaXQgdGhpcy5nZXRQbGFuZXRCeVVybChwZW9wbGUuaG9tZXdvcmxkKTtcbiAgICAgICAgY29uc3QgZmxhdGVuZWRTcGVjaWVzID0gYXdhaXQgdGhpcy5nZXRTcGVjaWVzQnlVcmxzKHBlb3BsZS5zcGVjaWVzKTtcbiAgICAgICAgY29uc3QgZmxhdGVuZWRGaWxtcyA9IGF3YWl0IHRoaXMuZ2V0RmlsbXNCeVVybHMocGVvcGxlLmZpbG1zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHBlb3BsZS5uYW1lLFxuICAgICAgICAgICAgaGVpZ2h0OiBwZW9wbGUuaGVpZ2h0LFxuICAgICAgICAgICAgbWFzczogcGVvcGxlLm1hc3MsXG4gICAgICAgICAgICBoYWlyX2NvbG9yOiBwZW9wbGUuaGFpcl9jb2xvcixcbiAgICAgICAgICAgIHNraW5fY29sb3I6IHBlb3BsZS5za2luX2NvbG9yLFxuICAgICAgICAgICAgZ2VuZGVyOiBwZW9wbGUuZ2VuZGVyLFxuICAgICAgICAgICAgYmlydGhfeWVhcjogcGVvcGxlLmJpcnRoX3llYXIsXG4gICAgICAgICAgICB1cmw6IHBlb3BsZS51cmwsXG4gICAgICAgICAgICBob21ld29ybGQ6IGZsYXRlbmVkUGxhbmV0LFxuICAgICAgICAgICAgc3BlY2llczogZmxhdGVuZWRTcGVjaWVzLFxuICAgICAgICAgICAgZmlsbXM6IGZsYXRlbmVkRmlsbXMsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5Td2FwaSA9IFN3YXBpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IFN3YXBpKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2gtY29tbW9uanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYmFja2VuZC9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==