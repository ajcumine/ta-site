var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('views', './views')
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App running at http://%s:%s', host, port);
});