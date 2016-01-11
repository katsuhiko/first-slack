/**
 * commands
 */
var router = {
	echo: require('./echo'),
	test: require('./test')
};

module.exports.respond = function(event, params, cb) {
  var command = params.text.split(' ')[0],
      response;

  if (router[command]) {
  	params.sub_command = command;
  	params.original_text = params.text
  	params.text = params.text.substr(command.length + 1);

  	return router[command].respond(event, params, cb);
  } else {
    response = {
      text: 'Hi, I don\'t know what you mean!'
    };

    return cb(null, response);
  }
};