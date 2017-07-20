// Importing required packages
var express = require("express");
var override = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");

// Set up express and port
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the app directory
app.use(express.static(process.cwd()+ "/public"));
app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE in handlebars file
app.use(override("_method"));

// import handlebars to use the main file.
var handle = require("express-handlebars");
app.engine("handlebars", handle({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import the controller and give the server access to routes.
var routes = require("./controller/controller.js");
app.use("/", routes);
app.listen(PORT);

console.log("App is listening on PORT " + PORT);