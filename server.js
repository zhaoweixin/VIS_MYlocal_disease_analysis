var express = require('express');
var bodyParser = require('body-parser');
var Icdfullname = require('./models/icdfullname.js');

var app = express();

app.get('/', function(req, res){
	Icdfullname.find({ICDCodeSeven: 'A28.801'}, function(err, doc){
	if(err){
		console.log(err);
	}else{
		res.send(doc);
	}
})
});

var server = app.listen(3000, function(){
	console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
})