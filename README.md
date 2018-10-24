
# What is this?

A knowledge base for getting an introduction and overview of typescript. Includes some sample projects for setting up typescript.

Typescript is a superset of the javascript language, which aims to make the development of large applications more manageable. The language transpiles to javascript, and can run in any javascript environment

# Structure 

Each folder in this repo contains an example starting point, for bootstrapping an application with typescript.

## Simple express webapp

Located in the [/webapp-simple](/webapp-simple/README.md), there is an example application. This is a simple webapp that uses typescript and express.js .

### Features

- Build system will watch static assets, typescript and node application
- Express js project based off the express-generator program
- Handlebars view integration
- Loggin integration
- Error handler and example routes


## Typescript library example

Located in [/library-example](/library-example/README.md)`, there is an example of a library that is transpiled for usage in the browser/node context using Babel 7 and the typescript compiler.

### Features

- Build system uses @babel/typescript for transpiling to browser safe javascript.
- Typescript for compilation
- Builds type definitions with the code.

## Babel + webpack + typescript


Located in [/webpack-example](/webpack-example/README.md), there is an example application which builds client side javascript for a simple static site. We use Babel for building the javascript, tsc for typechecking, and webpack for bundling and running the development server.

### Features
- Webpack development server.
- Minimal starting point for webpack development.
- Babel integration.
- Supports loading typescript and javascript and json using webpack loaders.

# FAQ's

## Why should we use typescript?

1. Improves code readability
2. Early detection of errors
3. Easy code analysis
4. Improved IDE support
5. Promotes dependable and safe refactoring

## Should I use it for everything?

Hard to answer, at this stage you can use it safely across any javascript interpreter, but your milage may vary, and the technique you use to transpile/compile typescript may vary. At this stage you should definitly consider using typescript for frontend development, and the support for server side typescript is improving!


## Why should I use typescript instead of flowtype?

- Typescript is winning the populatrity contest
- Many third party libraries are exposing `.d.ts` files.

## Why should I learn typescript?

Depends on your background. For people with a background in a strongly typed language, learning typescript will allow you to bring over a lot of your regular OOP thinking to the client side, yet introduce you to the javascript syntax and runtime. For beginners in typed languages, it is a good way to dip your feet in to the world of strong typing. For seasoned javascript developers, it will allow you to create API's that provide rich auto-complete. Additionally, everyone can benifit from learning new languages and development paradigms.

## How does typescript integrate with my browser/editor/debugger?

- Editor support is generally good.
- For Vscode: you get great auto-complete, and you can use the `.d.ts` definitions from libraries even when writing plain old JS, so typescript as a industry practice has been providing value even when using plain old javascript

## What is difficult with typescript?

- Project setup is "too hard"..
- Transpiled javascript in a debugger is not as beautiful as sourcemapped esnext.
- Different setup depending on server/client side deployments
- Learning the whole language is hard.
- Supports a lot of powerful and advanced type features, which makes choosing a pragmatic subset of the language hard. It is a langauge that is very easy to get fancy with, but your colleagues may not appreciate this when debugging code.

## What do you miss moving from typescript back to javascript?

- Jumping to class/interface definitions in the editor
- Interfaces
- Auto-fix editor support

## Why use Babel 7 for transpilation?

More contorl of the emitted code is enabled by Babel 7, and you probably already want to use Babel for transpilation of any `.js` source code assets that already exist in your code base.
Using Babel 7 is probably easier to setup than a full `tsc` centered build chain.

There is some evidence that Babel 7 might be a lot faster at transpiling than the `tsc` tool.

## Why not use Babel 7 for transpiling?

Babel 7 does not support some language features:

1. namespaces
2. bracket style type-assertion/cast syntax regardless of when JSX is enabled (i.e. writing <Foo>x won’t work even in .ts files if JSX support is turned on, but you can instead write x as Foo).
3. enums that span multiple declarations (i.e. enum merging)
4. legacy-style import/export syntax (i.e. import foo = require(...) and export = foo)


# Resources

Stuff you might use to learn a bit more about typescript

- A comprehensive list of typescript language features. http://ladder.ts.training/
- Learn typescript in Y minutes. https://learnxinyminutes.com/docs/typescript/ 
- Good web application starting point https://github.com/Microsoft/TypeScript-Node-Starter/
- Awesome stuff: static analysis https://github.com/SonarSource/SonarTS


