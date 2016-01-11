/**
 * test
 */
module.exports.respond = function(event, params, cb) {
  var response;

  response = {
    text: event.body
  };

  return cb(null, response);
};