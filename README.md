# Job Search Sample Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

It's a project that shows users a list of jobs on CareerJet's public API and allows for job search,
it also shows user's selected job on a map with job's location and distance to user.

## Prototype

![Scheme](./WebSearch.gif)
![Scheme](./JobSearch.gif)

## Development server

To Run, Get a google api key by following the instructions below: 

1. Go to https://console.developers.google.com/apis/library

2. Create a Project.

3. Go to the API Library, click on credentials.

4. Create an API Key.

5. Go to Dashboard.

6. Enable API’s for each google aspect.

7. Ensure you are selecting Javascript or Web(Google Maps, Google Distance Matrix, Google Places)
 
8. Change your google's api key in /src/app/service/apicalls.service.ts

Note that, distance and duration between selected job and user's location will not been shown without the correct API Key.

Run `ng serve  --proxy-config proxy.conf.json` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
The dist/ folder can be served on any server directly without running node.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
