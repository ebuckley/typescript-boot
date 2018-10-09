This folder contains a project which transpiles a commonjs module. The transpiled code sits in the `./dist/` folder. Babel 7 manages transpilation of typescript, and we use the typescript compiler only for type checking. A type definition file is built with the code so that consuming libaries can use the javascript implementation, but still get the benifits of type checking the usage of this code.

# Requirements

1. Note 8.12
2. Typescript version 3.1.1

# Getting started

```
npm install
npm run watch
```

# Getting started from scratch

### Install dependencies

Setup an npm package, and install the development dependencies.

```
npm init
npm install --save-dev typescript @babel/core @babel/cli @babel/preset-env @babel/preset-typescript 
```

### Create your tsconfig.json
The tsconfig is the core configuration file that manages your typescript compiler. Use the following command to provision, the file.

```
./node_modules/.bin/tsc --init --declaration --allowSyntheticDefaultImports --target es6 --outdir dist
```

### Create your .babelrc file

This file will instruct Babel on how to transpile your typescript code

```
{
    "presets": [
        "@babel/env",
        "@babel/typescript",
        {
            "targets": "last 2 versions"
        }
    ],
    "plugins": []
}
```


### Configure the build tasks

In the `scripts` section of your `package.json`, add the following build tasks.

```
    "type-check": "tsc --noEmit",
    "type-check:watch": "npm run type-check -- --watch",
    "build": "npm run build:types && npm run build:js",
    "build:types": "tsc --emitDeclarationOnly",
    "build:js": "babel src --out-dir dist --extensions \".ts\" --source-maps inline",
    "build:js:watch": "npm run build:js -- -w"
```

To generate the type definitions `*.d.ts` and transpiled javascript, simply run `npm run build`

# Caveats
Babel 7 does not support the following language features.

- namespaces
- bracket style type-assertion/cast syntax regardless of when JSX is enabled (i.e. writing <Foo>x won’t work even in .ts files if JSX support is turned on, but you can instead write x as Foo).
- enums that span multiple declarations (i.e. enum merging)

# Prior art
This was heavily inspired by the project setup done here
https://github.com/Microsoft/TypeScript-Babel-Starter


An introduction to how Babel 7 builds typescript (TLDR, it just deletes the typescript specific parts!)
https://iamturns.com/typescript-babel/