// Create the router for the app.
// import express and set up router function
var express = require("express");
var router = express.Router();

// import any models here
    // var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response){
    response.render("index");
})

module.exports = router;