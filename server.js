//creating a basic server
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

var reservations = require("./data.js");
console.log(reservations);

//app.get('/', (req, res) => res.send('Hello World!'))

//SETTING UP THE EXPRESS APP To HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log("Listening On PORT:" + PORT);
});


app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/reservation/form", function(req, res) {
    res.sendFile(path.join(__dirname, "reservationForm.html"));
});

app.get("/reservation/view", function(req, res) {
    res.sendFile(path.join(__dirname, "reservationView.html"));
});


$("#submit-reservation").on("click", function() {
    var userName = $("#name-input").val().trim();
    var userEmail =  $("email-input").val().trim();
    var userPhone = $("phone-input").val().trim();
    var userId = $("id-input").val().trim();

    var newReservation = {};
    newReservation.name = userName;
    newReservation.email = userEmail;
    newReservation.phone = userPhone;
    newReservation.id = userId;

    reservations.push(newReservation);
    console.log(reservations);    
})