module.exports = function loadStyle (src, cb) {
  var doc = document
  var el = doc.createElement('link')
  el.rel = 'stylesheet'
  el.href = src
  el.onload = function () { cb() }
  el.onerror = function () { cb(new Error('failed to load: ' + src)) }
  doc.head.appendChild(el)
}
