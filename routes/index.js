const express = require("express");
const router = express.Router();
const db = require("../models/database");

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.get("/", (req, res) => {
    db.query(`SELECT * FROM todos`).then((records) => {
        res.render("index", {
            pageTitle: "Home Page.. hopefully",
            todos: records,
        });
    });
});

router.delete("/", (req, res) => {
    let id = req.body.id;
    console.log(id);
    db.query(`DELETE FROM todos WHERE id = ${id}`).then((result) => {
        res.json(`id`);
    });
    // .then((result) => {
    //     console.log(result);
    //     db.query(`SELECT * FROM todos`).then((records) => {
    //         console.log(records);
    //     });
    // });
});

module.exports = router;
