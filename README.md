# RED SPACECRAFT


a Search engine of people from the Star Wars universe and display their information

## Development

when working on a new fature or issue, please create a new branch (with clear name related to the feature), and do a commit (with clear message) for every small changes instead of large changes.
### Local Development Setup

1. Clone this Repo
2. run `yarn install` in the project root directory to install all dependencies
3. run `yarn dev` to start development server

### Colaborating
when picking up an issue (before starting your work), please open some discussion (if needed). This is important to make us more clear about the issue.
then based on `master` create a new branch to work with
### Project Structures
The codes are mainly in `Typescript` and splited into two directories,

#### Backend - `/src/backend`
is a NodeJS Express server that run on port `3001` (by default). we can override this by adding `API_PORT=xxxx` in system environment or in `.env` file in project root directory
- `/api`, this is our API backend. Every folder in this directory will be the endpoint name with two files, the `controller.ts` and `route.ts` file.

  all endpoint can accept an `:id` param to get the data by id.
  - `/films`, endpoint to get the list of all films
  - `/person`, endpoint to get all person.
  - `/planet`, endpoint to get all planet.
  - `/species`, endpoint to get all species.

- `/swapi`, this is the upstream API for managing call to [SWAPI API](https://swapi.dev)
  - `/index.ts`, hold the `Swapi` class to manage all action needed for SWAPI stuff.
  - `/schema.ts`, SWAPI schema definition for data transformation goes here.

### Frontend - `/src/frontend`
created using [Create React App](https://create-react-app.dev/)

- `/assets`, all asset should goes here. like icons, global CSS styles, fonts, images, etc.
- `/components`, all reusable (shared across features) component should goes here.
- `/features`, all features should be inside this directory, including a `__test__` folder for each feature (if needed).
- `/utils`, all commons utility or helper function should be inside this directory.
### Naming Convention
- File names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation.
- Component names must be in UpperCamelCase with clear definition. eg, don't use `CustomButton`, use more meaningful name like `RoundedButton`. the extension must be `.tsx`
- Test file names must be all lowercase and may include dashes (-), but no additional punctuation. followed by `.spec` and extension must be `.ts` or `tsx`
## Pull Request
make a small PR as much as you can rather than one big PR. and please test it locally before creating PR (I know, we have Github Action for this 😃 ).

after creating a pull request, please assign your self and request for review from another member. write clear description about the PR to give better understanding for the reviewer.

If PR is not ready for review yet, please create a DRAFT pull request first.

If your PR is in a review state, but you have a new changes related to the opened PR. please DON'T push this changes to the current open PR. just create a new branch and then create a new PR with target branch pointed to the old PR. if the old PR already merged into `master`, then it safe to target the `master` branch. this will not confusing the reviewer 😃
## Staging Environment

When PR merged into master, it will run github workflow for automatic deployment into staging at https://red-spacecraft-staging.herokuapp.com

## Production Site
after promoting staging to production, it will be available at https://red-spacecraft.herokuapp.com

## Show your Support
To show your support for my work on this project:
- [Star this repository](https://github.com/pahrizal/red-spacecraft/stargazers)
- Tell others about this project
- [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/pahrizal)


