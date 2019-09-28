const orm = require ('../config/orm.js');


const burger = {
    all:function(cb){
        orm.all("burgers", function(res){
            cb(res)
        })
    },
    add: function(cols, vals, cb){
        orm.add("burgers",cols, vals, cb,function(res){
            cb(res);
        })
    },
    update: function(obj,cols,condition,cb){
        orm.update("burgers", obj,cols,condition, function(res){
            cb(res);
        })
    }
}

module.exports = burger;