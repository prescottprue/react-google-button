'use strict'
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const pkg = require('./package.json')

const config = {
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: [/node_modules/] }
    ]
  },
  entry: './src/index.js',
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
    filename: `react-google-button${
      process.env.NODE_ENV === 'production' ? '.min' : ''
    }.js`,
    library: 'ReactGoogleButton',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js']
  }
}

if (process.env.NODE_ENV === 'production') {
  config.optimization = {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
}

module.exports = config
