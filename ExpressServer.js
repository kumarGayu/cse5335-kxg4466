var express = require('express');
var path = require('path');

var routes = require('./routes/index');

var ExpressServer = express();
ExpressServer.set('port', (process.env.PORT || 5000));
// uncomment after placing your favicon in /public
ExpressServer.use(express.static(path.join(__dirname, 'public')));
ExpressServer.use(express.static(path.join(__dirname, '/app/webcontents')));

ExpressServer.use('/', routes);

ExpressServer.listen(ExpressServer.get('port'), function() {
  console.log('Node app is running on port', ExpressServer.get('port'));
});