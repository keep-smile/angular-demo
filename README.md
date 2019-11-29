# Angular + Material Design Test Project

- Basic two modules with Students and available Projects
- Material Design library
- NGRX as Storage management mechanism
- GitHub as hosting with deployment process
- Project architecture by Angular CLI
- Emulated asynchronous remote backend API

## Project details

Demo Application hosted on the GitHub page: https://keep-smile.github.io

Project shows simulation of the application corresponding for the relationsheep between Students and Projects.

Students can add project which they like or unengage from those ones which are outdated.

Projects can be deleted if no Students subscribed,

All data changes stored in the Local Storage which emulates backend API storage.

Application uses NgRx driven data storage mechanism 

Implements simple CD to the GitHub Pages ( https://keep-smile.github.io ) repository 

Data download as XLSX file

(e2e and unit tests)

#### Known issues

- Poor Mat Design implementation
- Poor Mobile adaptation
- Poor CSS usage and structure
- Ugly Git commit history
- Tests is in the progress - just couple e2e checks on this moment 

### Run details

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Run `ng build` to build the project.

Run `npm run deploy` to build project in prod mode and push to the GitHub pages service repository ( will not work without permissions )

Run `ng test` to run Karma test routine. 

Run `ng e2e` to execute the end-to-end tests.
