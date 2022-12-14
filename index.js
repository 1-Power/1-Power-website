//Adding the express and path to the variable 
const express = require("express");
const path = require("path");

//running the express server.
var app= express();

//Setting Images with the node js engin
app.use(express.static("image"));
app.get("/static", (req, res) => {
  res.render("static");
});

// Set public folder
const publicDirectory = path.join(__dirname, "./assets");
app.use(express.static(publicDirectory));
//Get Jason Data format
app.use(express.json());

//Set Html Template
// app.engine('html', cons.swig)
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

//Router to diffeent pages render
// app.use("/", require("./routes/pages"));
app.use ("/", require("./routes/pages"));
// Running the application on port 5000
app.listen(5000, () => {
    console.log("Node Server is running at port 5000");
  });


