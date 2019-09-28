const {Client}=require('pg');

const client =  new Client ({
  user: "postgres",
  password:"password",
  port:5432,
  database:"burger"
})

// client.connect(function(err){
//   if (err) {
//     console.error(`error connectiong: ${err.stack}`);
//     return;
//   }
//   console.log(`connected to db`)
// });








module.exports = client;

