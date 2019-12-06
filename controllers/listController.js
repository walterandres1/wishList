const express = require("express");
const router = express.Router();

const db = require("../models/index") //this line controls db connection

router.get("/list", (req, res) => {



    // db.Wish.findAll({})
    //     .then(items => {
    //         res.render("data/list", {
    //             items: items
    //         });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).end();
    //     });
    
    console.log(req.session)
    if (!req.session.userId) {
        return res.redirect("/");
      }
    
      db.Wish.findAll({ where: { UserId: req.session.userId } })
        .then(items => {
          res.render("data/list", {
            user: req.user,
            items: items
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).end();
        });

});




router.post("/list", (req, res) => {
    db.Wish.create({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        UserId: req.session.userId
    }).then(wish => {
        console.log(wish);
        res.redirect("/list");
    }).catch(err => {
        console.log(err)
    })
});

module.exports = router;
