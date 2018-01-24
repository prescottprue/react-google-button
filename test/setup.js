/* eslint-disable no-unused-vars */
const chai = (global.chai = require('chai'))
const expect = (global.expect = chai.expect)
const should = (global.should = chai.should())
const chaiEnzyme = require('chai-enzyme')
// var Promise = require('es6-promise').Promise
// global.Promise = Promise

// var chaiAsPromised = require('chai-as-promised')
// chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

// var jsdom = require('jsdom')
// var doc = jsdom.jsdom('<html><body></body></html>')
// var win = doc.defaultView
// global.document = doc
// global.window = win
// global.navigator = win.navigator
