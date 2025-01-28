const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

//database connection
mongoose
  .connect(process.env.DATABASE_STRING)
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

app.use(express.json())
app.use(express.urlencoded({extended : true}))
//set view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//perse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup

//error handler

app.listen(process.env.PORT, ()=>{
    console.log(`app is listening port ${process.env.PORT}`)
})