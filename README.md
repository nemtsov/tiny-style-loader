# Tiny Style Loader [![Build Status](https://img.shields.io/travis/behance/tiny-style-loader.svg)](http://travis-ci.org/behance/tiny-style-loader) [![NPM version](https://img.shields.io/npm/v/tiny-style-loader.svg)](https://www.npmjs.com/package/tiny-style-loader) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

The purpose of this library is to be the smallest callback & Promise -based style loader.

If you're looking for a script loader, check out [Tiny Script Loader](https://www.npmjs.com/package/tiny-script-loader)

## Usage

**Callback**

```js
var loadStyle = require('tiny-style-loader/loadStyle')

loadStyle('https://example.com/style.css', function () {
  console.log('loaded')
})
```

**Promise**

```js
var loadStyle = require('tiny-style-loader/loadStylePromised')

loadStyle('https://example.com/style.css')
.then(function () {
  console.log('loaded')
})
```

## License

[Apache-2.0](/LICENSE)
