//Express Server
const express = require("express");
//getting the router for the webpages.
const router = express.Router();


//this will render the loading screen page
router.get("/", (req, res) => {
    res.render("./pages/loading");
    
});
//loading the index page
router.get("/index", (req, res) => {
    res.render("./pages/index");
});



module.exports = router;