const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
app.use(express.json());

var knex = require("./db_config/database")
    // console.log('database', knex)

// route to signup.js
var signup = express.Router();
app.use("/user", signup);
require("./Routes/signup")(signup, jwt, knex);

// route to login.js
var login = express.Router();
app.use("/user", login);
require("./Routes/login")(login, jwt, knex);

// the port listener
var server = app.listen(3050, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running port....")
    console.log(host, port);
})