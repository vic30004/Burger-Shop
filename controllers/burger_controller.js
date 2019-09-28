const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.all(function(data){
        let hbsObjext = {
            burger : data
        };
        console.log(hbsObjext);
        res.render("index",hbsObjext);
    });
});

router.post("/api/burgers/:id",function(req,res){
    let condition = `id = ${req.params.id}`;
    console.log("condition", condition);

    burger.update("burger_name",condition,function(res){
        if(res.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports =router;