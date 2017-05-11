/* global app, $on */
(function(window) {
  'use strict'
  log('hello worlds')

  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
