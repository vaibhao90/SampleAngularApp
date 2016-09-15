// modules =================================================
var express        = require('express');
var app            = express();
//var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var ejs 		   = require('ejs');
var path = require('path');

// configuration ===========================================
var port = process.env.PORT || 3000; // set our port
var environmnt = process.env.MODE || 'development';

app.set("MODE", environmnt);

app.set('views', path.join(__dirname, 'public/views')); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app