//creating a basic server
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

//app.get('/', (req, res) => res.send('Hello World!'))

//SETTING UP THE EXPRESS APP To HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function() {
    console.log("Listening On PORT" + PORT);
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