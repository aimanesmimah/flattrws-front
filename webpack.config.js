var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");


var config = {
  entry : SRC_DIR + "/app/index.js",
  output : {
    path : DIST_DIR + "/app",
    filename : "bundle.js",
    publicPath : "/app/"
  },
  devtool : '#source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : "babel-loader",
        query : {
          presets : ['react','es2015','stage-2']
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader', {
        loader: 'postcss-loader',
        options: {
           plugins: () => [require('autoprefixer')]
         }}]
      }
    ]
  }
}

module.exports = config;
