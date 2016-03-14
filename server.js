var express = require('express');
var PORT = 3000;
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('Private route requested.');
		next();
	},
	logger: function(req, res, next) {
		console.log(req.method, req.originalUrl, new Date());
		next();
	}
}

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