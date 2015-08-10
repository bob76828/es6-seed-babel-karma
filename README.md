Example of a working ES6 seed ready to rock new projects with unit testing and code coverage.

Created from the great [systemjs-seed](https://github.com/lookfirst/systemjs-seed/) project and the helpful example [babel-jspm-karma-jasmine-istanbul](https://github.com/gunnarlium/babel-jspm-karma-jasmine-istanbul).

## Wired tool :

- [npm](https://www.npmjs.com) : package manager + build tool
- [JSPM](http://jspm.io) : browser package manager
- [SystemJS](https://github.com/systemjs/systemjs) : dynamic module loader
- [Babel](https://babeljs.io) : ES6 transpiler
- [Karma](http://karma-runner.github.io) : test runner
- [Jasmine](https://jasmine.github.io) (+ karma plugin) : unit test (TDD/BDD)
- [Istanbul](https://gotwarlost.github.io/istanbul/) (+ karma plugin) : code coverage

## ES6 tests

- Code and tests can be written in ES6
- Coverage reports show ES6 files, error reports indicates the faulty line numbers in ES6 files

## Notes

- This example does not use any other build tool than npm scripts, which plays well for little projects (on this topic, I recommend the reading of http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/).
- ES6 code is transpiled at runtime. See [systemjs-seed](https://github.com/lookfirst/systemjs-seed/) to adapt to the case of a build time ES5 generation.

## Install & Run

1. `npm install`
2. `jspm install`
3. `npm test`
4. Open `./coverage/Chrome.../index.html` to see coverage report
