module.exports = function loadStyle (src, cb) {
  var doc = document
  var tag = 'link'
  var firstStyle = doc.getElementsByTagName(tag)[0]
  var el = doc.createElement(tag)
  el.rel = 'stylesheet'
  el.href = src
  el.onload = function () { cb() }
  el.onerror = function () { cb(new Error('failed to load: ' + src)) }
  firstStyle.parentNode.insertBefore(el, firstStyle)
}
