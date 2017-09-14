var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./config/routes.js');

app.use(express.static("public"));
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect('mongodb://buxton2:Notarealpassword123456@ds135534.mlab.com:35534/heroku_bzhkvkvx');
var db = mongoose.connection;
db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function () {
  console.log('Mongoose connection successful.');
});

app.use('/', routes);
app.use('/test', routes);
app.use('/fetch', routes);
app.use('/gather', routes);
app.use('/check', routes);
app.use('/save', routes);
app.use('/delete', routes);


var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("lisenting on port:" + port);
});
