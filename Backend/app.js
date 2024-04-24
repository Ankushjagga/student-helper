const express = require("express");
require("./database/conn")
require("dotenv");
const cookieParser = require('cookie-parser');
const routes = require("./router/auth");
const session = require('express-session');
const fileUpload = require('express-fileupload');
const path=require("path")

const app=express();
app.use(express.static("public"))
app.use(fileUpload());
app.use(cookieParser()); 
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use("/",routes)

app.listen(5000,()=>{
    console.log("Server running at 5000");
})

