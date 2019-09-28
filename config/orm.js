const  client = require("../config/connection.js");

async function connect(){
    try 
    {
      await client.connect();
      console.log("Connected!")
    }
    catch(err)
    {
      console.log(`Failed to connect ${err}`);
    }
  }


async function start(){
    await connect();  
  }

  

  function objToSql(ob) {
    let arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  


const orm = {
    all: function(tableInput, cb) {
        let  queryString = `SELECT * FROM ${tableInput};`;
        client.query(queryString, function(err,res){
            if (err){
                throw err;
            }
            cb(res)
        });
    },
   add: function(table, cols, vals, cb) {
       let queryString = `INSERT INTO ${table}`;
       queryString+= `(${cols.toString()}) VALUES ($1)`
       console.log(queryString);
       client.query(queryString, [vals], function(err, res){
           if (err){
               throw err;
           }
           console.table(res)
       })
   },
   update: function(table,obj,cols,condition,cb){
       let queryString= `UPDATE ${table} SET ${objToSql(obj)} WHERE ${cols} = ($1) `;
       client.query(queryString,[condition], function(err,res){
           if(err) {
               throw err;
           }
           cb(res)
       })
   }
}


  start();

  module.exports = orm