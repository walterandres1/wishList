const express = require("express");
const router = express.Router();

const db = require("../models/index")

router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post("/login", (req, res) => {
    db.User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (!user) {
                return res.render("auth/login", { error: "Invalid email or password, please try again." });
            }

            if (user.password !== req.body.password) {
                return res.render("auth/login", { error: "Invalid email or password, please try again." });
            }

            req.session.userId = user.id;
            res.redirect("/list");
        })
        .catch(err => {
            console.log(err);
        });
});

//-------------------------------
router.get("/register", (req, res) => {
    res.render("auth/register");
});

module.exports = router;