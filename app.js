var express = require("express");

var app = express();

app.set("view engine","jade");

app.get("/",function(req,res){
    //res.send("hola mundo");
    res.render("index",{hola:"hola, esto es un test de reemplazo de variable"});
});

app.listen(8080);