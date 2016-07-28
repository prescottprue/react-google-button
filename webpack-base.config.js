'use strict'
var webpack = require('webpack')
var pkg = require('./package.json')

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel' ], exclude: [ /node_modules/ ] }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('react-google-button.js v' + pkg.version + ' | (c) prescottprue',
      {
        raw: false, entryOnly: true
      })
  ],
  output: {
    library: 'GoogleButton',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js']
  }
}
