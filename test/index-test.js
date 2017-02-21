/* global beforeEach, afterEach, describe, it */

var sinon = require('sinon')
var unit = require('../')

describe('tiny-style-loader', function () {
  var doc, el, appendChild

  beforeEach(function () {
    appendChild = sinon.spy()

    global.document = doc = {
      createElement: sinon.stub(),
      head: {
        appendChild: appendChild
      }
    }

    el = { nodeName: 'LINK' }

    doc.createElement.withArgs('link').returns(el)
  })

  afterEach(function () {
    delete global.document
  })

  describe('loadStyle', function () {
    it('should call back if load successful', function (done) {
      unit.loadStyle('unit.css', done)
      el.onload()
    })

    it('should errback if load errored', function (done) {
      unit.loadStyle('unit.css', function (err) {
        err.message.should.match(/unit\.css/)
        done()
      })
      el.onerror()
    })

    it('should create the correct element', function (done) {
      unit.loadStyle('unit.css', function () {
        el.nodeName.should.equal('LINK')
        el.href.should.equal('unit.css')
        el.rel.should.equal('stylesheet')
        done()
      })
      el.onload()
    })
  })

  describe('loadStylePromised', function () {
    it('should call back if load successful', function () {
      var promise = unit.loadStylePromised('unit.css')
      el.onload()
      return promise
    })

    it('should errback if load errored', function () {
      var promise = unit.loadStylePromised('unit.css')
        .then(function () {
          throw new Error('should have thrown')
        })
        .catch(function (err) {
          err.message.should.match(/unit\.css/)
        })
      el.onerror()
      return promise
    })
  })
})
