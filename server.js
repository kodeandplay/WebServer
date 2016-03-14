var express = require('express');
var middleware = require('./middleware');
var PORT = 3000;
var app = express();



app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));
// app.use(middleware.requireAuthentication);
 

app.get('/', function(req, res) {
	res.send('Hello Express');
});

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});



app.listen(PORT, function() {
	console.log('Server listening on port %d', PORT);
});