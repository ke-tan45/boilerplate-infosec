const express = require('express');
const app = express();
{
	"name": "fcc-infosec-challenges",
	"version": "0.0.1",
	"description": "fcc backend boilerplate",
	"main": "server.js",
	"scripts": {
		"start": "node myApp.js"
	},
	"dependencies": {
		"express": "^4.14.0",
		"helmet": "3.21.3"
	},
	"keywords": [
		"node",
		"hyperdev",
		"express",
		"freecodecamp"
	],
	"license": "MIT"
}













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
