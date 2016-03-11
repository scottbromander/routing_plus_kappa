var express = require("express");
var router = express.Router();
var path = require("path");

//      ->   "/pets/dogs/meow"

router.get("/pets/cats", function(req,res){
    res.send({name: "Totally works"});
});

         //"/data/pets/dogs/bark"

router.get("/pets/:id/:name", function(req,res){
    console.log(req.params);

    if(req.params.id == "dogs" && req.params.name == "bark"){
      res.send({name: "DOG SHOW"});
    } else {
      res.send({name: "Yup, this too"});
    }
});



module.exports = router;
