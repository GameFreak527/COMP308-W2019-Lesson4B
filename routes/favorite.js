let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a reference through database schema
let favorite = require("../models/favorite");

//Get contact list page - READ operation
router.get("/", (req, res, next) => {
  favorite.find((err, favoriteList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(favoriteList);
      /*
      res.render('favorite/index',{
          title:'Favourite Things',
          favoriteList: favoriteList
      });
      */
    }
  });
});

module.exports = router;
