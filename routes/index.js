const express = require("express");
const router = express.Router();
const db = require("../models/database");

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

//READ: GRABS ALL EXISTING TODOS FROM DB
router.get("/", async (req, res) => {
    let records = await db.query(`SELECT * FROM todos`);
    res.render("index", {
        pageTitle: "Home Page.. hopefully",
        todos: records,
    });
});

//DELETE: DELETES AN EXISTING TODO USING ID FROM DB
router.delete("/", async (req, res) => {
    let id = Number(req.body.id);
    console.log(id);
    let response = await db.query(`DELETE FROM todos WHERE id = $1`, id);
    console.log(response);
    let remainingRecords = await db.query(`SELECT * FROM todos`);
    res.status(200).json({
        id: id,
        records: remainingRecords,
    });
});

//CREATE: CREATES NEW TODO RECORD IN TODOS TABLE
//TO IMPLEMENT!
router.post("/", async (req, res) => {
    let id = Number(req.body.id);
    let text = req.body.text;

    let response = await db.query(`INSERT INTO todos (todo) VALUES ($1)`, text);
    console.log(response);
    res.status(200).json({
        id: id,
    });
});

router.module.exports = router;
