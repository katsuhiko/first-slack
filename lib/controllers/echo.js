/**
 * echo
 */
var Qs = require('qs');

module.exports.respond = function(event, cb) {
  var params = Qs.parse(event.body),
      response;

  response = {
    text: params.text
  };

  return cb(null, response);
};