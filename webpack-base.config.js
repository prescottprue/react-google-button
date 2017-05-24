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
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  output: {
    library: 'ReactGoogleButton',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js']
  }
}
