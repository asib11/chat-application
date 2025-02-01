const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require("cookie-parser");
const moment = require("moment");
const http = require("http");
const {notFoundHandler, errorHandler} = require('./middleware/common/errorhandler');
const loginRouter = require('./router/loginRouter')
const usersRouter = require('./router/usersRouter')
const inboxRouter = require('./router/inboxRouter')

const app = express();
const server = http.createServer(app);
dotenv.config();

// socket creation
const io = require("socket.io")(server);
global.io = io;

// set comment as app locals
app.locals.moment = moment;

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
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/inbox', inboxRouter)

//error handler
// 404 error
app.use(notFoundHandler);
//common error
app.use(errorHandler);

app.listen(process.env.PORT, ()=>{
    console.log(`app is listening port ${process.env.PORT}`)
})