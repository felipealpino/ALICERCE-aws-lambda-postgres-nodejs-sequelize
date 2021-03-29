const http = require("http");
const express = require("express");
const logger = require("morgan");
// const bodyParser = require("body-parser");
require('dotenv').config({path:'variables.env'});

const port = parseInt(process.env.PORT, 10) || 7777;

// Set up the express app
const app = express();
const server = http.createServer(app);

// Log requests to the console.
app.use(logger("dev"));

/**
 * Para lidar com requisções do tipo POST (body)
 */
app.use(express.json()) //body-parser (old library)
app.use(express.urlencoded({extended:true})) 


// Testando conexão com servidor "*" escuta qualquer endpoint
require("./server/routes")(app);  //.app nao funciona
// app.use('/api', require('server/routes/api'))
app.get("*", (req, res) =>  
  res.status(200).send({
    message: "Init the API!"
  })
);

/**
 * Não é necessario para aws lambda deployment
 */
if(process.env.NODE_ENV == 'test'){
  app.set("port", port);
  server.listen(port);
}

if(process.env.NODE_ENV == 'development'){
  module.exports = app;
}
