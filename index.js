
 
let express = require("express");  
const cors = require("cors");  
let morgan = require("morgan");  
var compression = require("compression");  
var app = express();
var fs = require("fs")
var helmet = require("helmet");
var http = require('http').Server(app);

let myResponse = require("./app/filter/response")

app.use(helmet());
app.use(morgan("common"));  
app.use(cors({  
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(compression());
app.use( myResponse);


// let getVar = "get"
// let postVar = "post"
// app[getVar]("/", async function (req, res, next) {
//     res.success({test:"111", a :"dsfaf"})
// });

app.get("/", async function (req, res, next) {
    res.success({test:"testttttt", a :"dsfaf"})

});  

http.listen(3000, function() {  
    console.log("My API is running...");
});

module.exports = app;