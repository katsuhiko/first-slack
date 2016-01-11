'use strict';

/**
 * params
 */
var Qs = require('qs');

module.exports.from = function(event) {
  return Qs.parse(event.body);
};