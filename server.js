const express = require ('express');
const exphbs = require('express-handlebars');
const app= express();
const PORT= 5000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js");

app.use(routes);


app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });

  
