var express = require('express');
var path = require('path');

var routes = require('./routes/index');

var mongo = require('mongodb');
var monk = require('monk');
var uri='mongodb://heroku_9qjbt9g4:jno0qlidl1mfr6hn7i1sondjhl@ds147777.mlab.com:47777/heroku_9qjbt9g4';

var ExpressServer = express();
ExpressServer.set('port', (process.env.PORT || 5000));
// uncomment after placing your favicon in /public
ExpressServer.use(express.static(path.join(__dirname, 'public')));
ExpressServer.use(express.static(path.join(__dirname, '/app/webcontents')));

//connect to mongodb
ExpressServer.use(function(req,res,next){
	req.db = mongo.MongoClient.connect(uri, function(err, db) {
		if(err) throw err
		req.db = db;
		next();
	})
});

ExpressServer.use('/', routes);

ExpressServer.listen(ExpressServer.get('port'), function() {
  console.log('Node app is running on port', ExpressServer.get('port'));
});