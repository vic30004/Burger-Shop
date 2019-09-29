const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.all(function(data){
        let hbsObjext = {
            burgers : data
        };
        res.render("index",hbsObjext);
    });
});

router.post("/api/burgers",function(req,res){
    console.log(req.body.burger);
    burger.add("burger_name",req.body.burger,function(){
       res.json({id:res.insetId})
    })

})

router.put("/api/burgers/:id", function(req,res){
    let condition = req.body.burger
    console.log(condition);
    burger.update({devoured:true},"burger_name",condition,function(data){
        if(data.changedRows ===0){
            return res.status(404).end();
        }
        res.status(200).end();
    })
})



module.exports=router;