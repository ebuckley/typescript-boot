# Re-creating this setup

1. create server/client folder
2. npm init in the server/client folder

## Client side setup

This resembles the webpack example. Source code lives in `client/src/`. Built code will go in to `client/dist`.

#### Install dev dependencies
```bash
npm install --save-dev \
  @babel/core \
  @babel/cli \
  @babel/preset-env \
  @babel/preset-typescript \
  @babel/plugin-proposal-class-properties\
  @babel/plugin-proposal-object-rest-spread \
  webpack \
  webpack-cli \
  source-map-loader \
  babel-loader
```


#### webpack.config.js

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  devtool: 'inline-source-map',
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

#### .babelrc
```
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "browsers": "last 1 version"
        },
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

#### tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES5", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
    "module": "commonjs", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "noEmit": true, /* Stop tsc from emitting compiled code, we use Babel7 for compilation */
    "inlineSourceMap": true
  }
}
```

#### Add run scripts to package.json
```
    "build": "webpack",
    "check": "tsc",
    "watch": "webpack -w"
```

## Setup the application server

```
mkdir public
mkdir src
mkdir views
```
#### Install dependencies

```bash
npm install --save-dev concurrently nodemon
npm install express hbs winston
```

#### Create the tsconfig.json
```json
{
  "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "noImplicitAny": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist",
      "baseUrl": ".",
      "paths": {
          "*": [
              "node_modules/*",
              "src/types/*"
          ]
      },
      "lib": [
          "es2015"
      ]
  },
  "include": [
      "src/**/*",
  ]
}
```
#### Add run scripts to package.json


#### Create initial 