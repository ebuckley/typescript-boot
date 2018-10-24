An example applicaiton for getting started with Typescript, Babel 7 and  Webpack.
# Getting started
```
npm install
npm run build
```

# Getting started (from scratch)

The following instructions detail how to setup this project from scratch.

## Install dependencies

```
 npm install --save-dev \
  typescript \
  @babel/core \
  @babel/cli \
  @babel/preset-env \
  @babel/preset-typescript \
  @babel/plugin-proposal-class-properties\
  @babel/plugin-proposal-object-rest-spread \
  webpack \
  webpack-cli \
  webpack-dev-server \
  source-map-loader \
  babel-loader
```

## Add a tsconfig.json file
Typescript needs to know what compiler rules to use for checking the types. `noEmit` has been enabled so that we only use the `tsc` utility for type checking.

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs", 
    "noEmit": true /* Stop tsc from emitting compiled code, we use Babel7 for compilation */
  }
}
```


## Add a .babelrc file
Babel 7 requires the following configuration for compiling code.
```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "browsers": "last 2 versions"
        },
        "useBuiltIns": "usage",
        "modules": false
      }
    ],
    "@babel/typescript"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
```
## Create a webpack.config.js

Webpack needs a configuration file to know what/where/how to bundle and build the typescript. The notable parts are configuration of rules for loading `js` or `ts` files.

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
};

```

## Add npm scripts for building and serving
Add the following run scripts to your `package.json`
```
    "build": "webpack",
    "serve": "webpack-dev-server"
```
This helps out with:

1. A convenience method for building the code (use `npm run build`).
2. A development webserver which watches for code change

## Create your entrypoint script

The webpack bundler needs to know where to start bundling from. Add the following code to a new file in the path `src/index.ts`.

```ts
function component() {
  let element = document.createElement('div')
  element.innerHTML = `
    <h1> Hello webpack example! </h1>
  `
  return element;
}

document.body.appendChild(component())
```
