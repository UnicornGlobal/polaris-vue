/* eslint-disable */
global.sinon = require('sinon');
require('jsdom-global')()
window.Date = Date
const chai = require('chai')
global.chai = chai
global.expect = chai.expect
global.assert = chai.assert
