/* hello world
var express = require("express");
var app = express();
app.get("/home", function(req, res) {
	res.end("Hello World!");
});
app.listen(process.argv[2]);*/

/* static
var express = require("express");
var app = express();
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.listen(process.argv[2]);*/

/* jade
var express = require("express");
var app = express();
var path = process.argv[3];
app.set("views", path);
app.set("view engine", "jade");
app.get("/home", function(req, res) {
	res.render("index", {date: new Date().toDateString()});
	res.end();
});
app.listen(process.argv[2]);*/

/* good old form
var express = require("express");
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
app.post("/form", function(req, res) {
	res.end(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);*/

/* stylish css
var express = require("express");
var app = express();
var stylus = require("stylus");
var path = process.argv[3];
app.use(stylus.middleware(__dirname + '/public'));
app.use(express.static(path||path.join(__dirname, 'public')));
app.listen(process.argv[2]);*/

/* param pam pam
var express = require("express");
var app = express();
app.put("/message/:id", function(req, res) {
	res.end(require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex'));
});
app.listen(process.argv[2]);*/

/* what's in query
var express = require("express");
var app = express();
app.get("/search", function(req, res) {
	res.send(req.query);
});
app.listen(process.argv[2]);*/

// json me
var express = require("express");
var app = express();
var fs = require("fs");
var fName = process.argv[3];
app.get("/books", function(req, res) {
	fs.readFile(fName, function(err, data) {
		if(err)
			throw err;
		var file = JSON.parse(data);
		res.send(file);
	});
});
app.listen(process.argv[2]);