const express = require("express");
const router = express.Router();
const db = require("../models/database");

router.get("/", (req, res) => {
    db.query(`SELECT * FROM todos`).then((records) => {
        res.render("index", {
            pageTitle: "Home Page.. hopefully",
            todos: records,
        });
    });
});

module.exports = router;
