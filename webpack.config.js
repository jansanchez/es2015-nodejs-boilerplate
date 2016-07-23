
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.join(ROOT_PATH, '/build/');
var nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
  externals: [nodeExternals()],
  entry: {
    "index": ['./index']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
