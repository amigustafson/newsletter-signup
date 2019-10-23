//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");

});


app.post("/", function(req, res){
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;

    axios.post("https://us20.api.mailchimp.com/3.0/lists/8ef059138f")
    .then(function(response) {
      console.log(response.statusCode);
    })
    .catch(function(error) {
      console.log(error);
    });

});

app.listen(port, function(){
  console.log("Server is running on port " + port);
});

// 30f369bc1758a6163766051399f21cc9-us20

//Audience ID
//8ef059138f
