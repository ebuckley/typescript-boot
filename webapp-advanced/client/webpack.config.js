const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: '/node_modules/'
  },
  watch: true,
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
