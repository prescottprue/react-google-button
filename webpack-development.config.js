'use strict'

var baseConfig = require('./webpack-base.config')

var config = Object.create(baseConfig)
config.plugins = config.plugins.concat([])

module.exports = config
