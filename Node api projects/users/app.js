const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sql = require("mssql");

const userRoutes = require('./api/routes/users');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({etended: false}));
app.use(bodyParser.json());

// CORS request header
app.use((req, res, next) => {
    // allows from any origin
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')
        return res.status(200).json({});
    }
    // next stops other routes taking over
    next();
});

  // middleware to forward requests to the router
  app.use('/users', userRoutes);
  
  // error handling
  app.use((req, res, next) => {
      const error = new Error('Not found');
      error.status = 404;
      next(error);
  })

  // pass in the error

  app.use((error, req, res, next) => {
      // get the error status or use status 500
      res.status(error.status || 500);
      res.json({
          error: {
              // return the error message
              message: error.message
          }
      });
  });

module.exports = app;
