# deployment process
This project is deployed in github link using ng deploy base-href given by github.the command should be run in Command prompt
 
# functionality
This web page contains three set of dropdown options either we can select next session date or to select the child process or select the provider.Each drop down contains set of date and courses,In the other division based on the user search the  number of courses will be display and total number of courses based on user search will be display as a count value.

when we select the next session date all the list of courses will get displayed including course id ,url,name and provider.These are the major requirement.I completed all functionality in a single page,I didnt redirect to any page since the requirement given can be executed in a single component so i didnt create the other one.

For fetching the json file from the server i created a service file  and include a https link to access the json file.

In the courses-listing ts file I wrote a array manipulation login to filter the repeated number of courses and provider in the UI/UX i have displayed the list without the duplicate values


# ListofCourses

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<!-- ## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
 -->
