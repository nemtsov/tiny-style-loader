var loadStyle = require('./loadStyle')

module.exports = function loadStylePromised (src) {
  return new Promise(function (resolve, reject) {
    loadStyle(src, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
