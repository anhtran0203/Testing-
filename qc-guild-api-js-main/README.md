# API testing framework with cucumber.js

It provides a gherkin framework and a collection of utility functions to make API testing easy and less time consuming.

[Cucumber.js](https://github.com/cucumber/cucumber-js) is JavaScript & Node.js implementation of Behaviour Driven Development test framework - [Cucumber](http://cukes.info/). Cucumber.js is using [Gherkin](http://cukes.info/gherkin.html) language for describing the test scenarios in [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development) manner.

## How to start - a simple tutorial

### Start new project

Below steps will help you start a new test project from scratch.

#### 1. Folder structure
Let's start a new testing project for an API called *signup*. The folder structure will need to match the structure expected by cucumber.js:

```
src/
|---- configs/
|         |---- .env
|---- data/
|         |---- employee_info.csv
|---- features/
|         |---- signup.feature
|---- step_definitions/
|         |---- commonSteps.js
|         |---- signupSteps.js
|---- utilities/
          |---- replacePlaceholders.js
          |---- stringUtilities.js
package.json
```

Features directory contains cucumber feature files written in gherkin syntax. step_definitions contains the JavaScript implementation of gherkin test cases. Check out the GitHub repository for example implementations covering most used testing scenarios.

#### 2. Package.json
This can be an example package.json file for our project:

```json
{
  "name": "cucumber-js-assignment",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "node run.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "eslint": "^8.29.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-plugin-import": "^2.26.0"
  },
  "dependencies": {
    "@cucumber/cucumber": "^10.4.0",
    "chai": "^4.4.1",
    "dotenv": "^16.4.5",
    "axios": "^1.6.8",
    "multiple-cucumber-html-reporter": "^3.6.2"
  }
}
```

#### 3. Install dependencies
Now we can get the project dependencies installed:

```sh
$ npm install
```

#### 4. Create .env file
Then we create .env file following the folder structure (all configs are stored in [.env file](https://drive.google.com/file/d/1DR2KxKcWp2ctdLW8PTUk-wBhYUcR0Is6/view?usp=sharing))

#### 5. Run tests with cucumber.js
The following will run our scenario (in the project directory):

```sh
$ bash runFeature.sh '@smoke_qa'
....

1 scenarios (1 passed)
11 steps (11 passed)
```
How to run bash with combination multiple BDD tags:  
- [Tag expressions](https://cucumber.io/docs/cucumber/api/?lang=java#tag-expressions)
- [Passing arguments into Bash Script](https://www.baeldung.com/linux/use-command-line-arguments-in-bash-script#processing-the-input)
