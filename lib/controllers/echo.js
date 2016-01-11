/**
 * echo
 */
var Qs = require('qs');

module.exports.respond = function(event, params, cb) {
  var response;

  response = {
    text: params.text
  };

  return cb(null, response);
};