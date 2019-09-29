const {Client}=require('pg');

const client =  new Client ({
  user: "postgres",
  password:"password",
  port:5432,
  database:"burger"
})






module.exports = client;

