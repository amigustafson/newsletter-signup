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

  var data = {
    members: [
      {email_adress: email,
        status: "subscribed"},
    ]
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'basic'
  }

  var jsonData = JSON.stringify(data);

//BAD MailChimp API. It only works for GET-reqests
    axios.post("https://us20.api.mailchimp.com/3.0/lists/8ef059138f/", {
      members: jsonData.members,

    }, {
      auth: {
        username: "username",
        password: "79c015d1b194e4c5fa6db2cf3a72b169-us20"
      },

    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

});


app.listen(port, function(){
  console.log("Server is running on port " + port);
});

// 30f369bc1758a6163766051399f21cc9-us20

//79c015d1b194e4c5fa6db2cf3a72b169-us20

//Audience ID
//8ef059138f
