/**
 * Lib
 */
var Qs = require('qs');

module.exports.respond = function(event, cb) {
  var params = [],
      response,
      params = Qs.parse(event.postBody);

  response = {
    text: params.text
  };

  return cb(null, response);
};