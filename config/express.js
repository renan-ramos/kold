var express = require("express");
var app = express();

app.set("views", "./app/views") // Setting the Views Folder in Express
app.set("view engine", "ejs"); // Setting EJS as View Engine in Express
app.use(express.static("app/public"));

module.exports = function() {
    return app;
};