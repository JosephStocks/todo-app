const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "Home Page.. hopefully",
    });
});

module.exports = router;