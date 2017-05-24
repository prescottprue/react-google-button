'use strict'
var webpack = require('webpack')
var pkg = require('./package.json')

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel-loader' ], exclude: [ /node_modules/ ] }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(
      {
        banner: 'react-google-button.js v' + pkg.version + ' | (c) prescottprue',
        raw: false,
        entryOnly: true
      })
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'PropTypes'
    }
  },
  output: {
    library: 'ReactGoogleButton',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js']
  }
}
