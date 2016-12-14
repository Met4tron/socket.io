/* Módulo do Express */
var express = require('express');

/* Módulo do bodyParser */
var bodyParser = require('body-parser');

/* Módulo do Consign */
var consign = require('consign');

/* Módulo Express Validator */
var expressValidator = require('express-validator');


var app = express();


app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Middlewares*/
app.use(express.static('./app/public'));
/* bodyParser*/
app.use(bodyParser.urlencoded({extended: true}));
/* Express Validator*/
app.use(expressValidator());

/*AutoLoad*/
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);


module.exports = app;
