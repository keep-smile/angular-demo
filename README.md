# Angular + Material Design Test Project

- Basic two modules with Student and available Projects
- Material Design library
- NGRX as Storage management mechanism
- GitHub as hosting with deployment process
- Project architecture build by Angular CLI
- Emulated asynchronous remote backend API


## Project details

Demo Application hosted on the GitHub page: https://keep-smile.github.io

Project shows simulation of the application corresponding for the relationsheep between Students and Projects.

Students can add project which they like or unengage from those ones which are outdated.

Projects can be deleted if no Students subscribed,

All data changes stored in the Local Storage which emulates backend API storage.

Application uses NgRx driven data storage mechanism 

Implements simple CI to the GitHub Pages ( https://keep-smile.github.io ) repository 


#### Known issues

- Not mobile adapted
- Not refactored - code duplication  
- Not optimized Modules imports


### Run details

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Run `ng build` to build the project.

Run `ng test` to run Karma test routine.

Run `npm run deploy` to build project in prod mode and push to the GitHub pages service repository ( will not work without permissions ) 

Run `ng e2e` to execute the end-to-end tests.
