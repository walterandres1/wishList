const express = require("express");
const router = express.Router();

const db = require("../models/index")

router.get("/list", (req, res) => {
    res.render("data/list");
});





router.post("/list", (req, res) => {
    db.Wish.create({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    }).then(wish => {
        console.log(wish);
        // res.redirect("/list");
    }).catch(err => {
        console.log(err)
    })
});


module.exports = router;
