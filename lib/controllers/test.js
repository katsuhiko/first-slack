/**
 * test
 */
module.exports.respond = function(event, cb) {
  var response;

  response = {
    text: event.body
  };

  return cb(null, response);
};