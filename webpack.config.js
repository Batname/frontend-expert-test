'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
let webpack = require('webpack');

module.exports = {
  context: __dirname + '/sources',
  entry:   {
    main: './index'
  },
  output:  {
    path:       __dirname + '/public',
    publicPath: '/',
    filename:   '[name].js'
  },


  module: {
    loaders: [{
      test:   /\.js$/,
      include: __dirname + '/sources',
      loader: "babel?presets[]=es2015"
    },{
      test:   /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    },{ 
      test: /\.json$/, loader: 'json'
    }, {
      test: /\.jade$/, loader: 'jade'
    }]

  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates:    ['*-loader', '*'],
    extensions:         ['', '.js']
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: __dirname + '/public'
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG:     JSON.stringify('ru')
    })
  ],
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}