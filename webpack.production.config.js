
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.join(ROOT_PATH, '/build/');
var webpack = require('webpack');
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
	plugins: [
		new webpack.optimize.DedupePlugin(),
		//new webpack.optimize.CommonsChunkPlugin('CommonCodeExtracted.js'), // usar solo cuando se tiene codigo repetido
		new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        outputs: {
        	comments: false
        }
    }),
		new webpack.optimize.AggressiveMergingPlugin()
	],
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
