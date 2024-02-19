
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sappaylib.cjs.production.min.js')
} else {
  module.exports = require('./sappaylib.cjs.development.js')
}
