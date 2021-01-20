const express = require("express");
const router = express.Router();
const db = require("../models/");

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

//READ: GRABS ALL EXISTING TODOS FROM DB
router.get("/", async (req, res) => {
    let records = await db.todos.findAll();
    res.render("index", {
        pageTitle: "Home Page.. hopefully",
        todos: records,
    });
});

//DELETE: DELETES AN EXISTING TODO USING ID FROM DB
router.delete("/", async (req, res) => {
    let numRowsDeleted = db.todos.destroy({
        where: { id: Number(req.body.id) },
    });
    let remainingRecords = db.todos.findAll();
    res.status(200).json({
        id: id,
        records: remainingRecords,
    });
});

//CREATE: CREATES NEW TODO RECORD IN TODOS TABLE
//TO IMPLEMENT!
router.post("/", async (req, res) => {
    let createResponse = db.user.create({
        description: req.body.text,
        completed: false,
    });

    console.log(createResponse);

    res.status(200).json({
        text: req.body.text,
    });
});

//PATCH: WILL UPDATE THE COMPLETED TAG WHEN CHECKLIST IS CHECKED OR UNCHECKED
//true or false????? toggle?? or two different functions
//GRAB THE PLUS ICON FROM THE HEROICONS
router.patch("/", async (req, res) => {
    db.todos.update({ completed: true }, { where: req.body.id });
});

module.exports = router;
