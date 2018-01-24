'use strict'
const webpack = require('webpack')
const pkg = require('./package.json')

const config = {
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: [/node_modules/] }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
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

if (process.env.NODE_ENV === 'production') {
  config.plugins.concat(
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

module.exports = config
