/**
 * Lib
 */

module.exports.respond = function(event, cb) {
  var params = [],
      response,
      hashes = event.postBody.split("&");

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    params.push(hash[0]);
    params[hash[0]] = decodeURIComponent(hash[1].replace(/\+/g, '%20'));
  }

  response = {
    text: params.text
  };

  return cb(null, response);
};