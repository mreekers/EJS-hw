var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'))

app.get("/", function(request, result) {	
	result.render('index');
});

app.post("/add", function(request, result) {
	var x = Number(request.body.firstnumber);
	var y = Number(request.body.secondnumber);
	var sum = x + y;
	result.send("sum is " + sum);	
});

app.post("/subtract", function(request, result) {
	var x = Number(request.body.firstnumber);
	var y = Number(request.body.secondnumber);
	var sum = x - y;
	result.send("sum is " + sum);	
});

app.post("/multiply", function(request, result) {
	var x = Number(request.body.firstnumber);
	var y = Number(request.body.secondnumber);
	var sum = x * y;
	result.send("sum is " + sum);	
});

app.post("/divide", function(request, result) {
	var x = Number(request.body.firstnumber);
	var y = Number(request.body.secondnumber);
	var sum = x / y;
	result.send("sum is " + sum);	
});

app.listen(3000);