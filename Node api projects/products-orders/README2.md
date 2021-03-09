Access SQL Server in Node.js
========================================
In order to access MS SQL database, we need to install drivers for it.

Install mssql driver using npm command, npm install mssql in the command prompt.

Server.js file
---------------

app.js file
------------

import mssql module in the app.js file

var sql = require("mssql");

Require the router file

const userRoutes = require('./api/routes/users');

Route requests to the router file

app.use('/users', userRoutes);

users.js file
-------------

In the router file require express

const express = require('express');
const router = express.Router();

Create a get route which 

1. imports the module

router.get('/', function (req, res) {
   
    var sql = require("mssql");
    
2. passes config object which includes database information such as userName, password, database server and database name. 

var config = {
        user: 'laravel',
        password: 'laravel',
        server: 'localhost', 
        database: 'LaravelDatabase' 
    };

3. calls connect() method to connect with database. 

 sql.connect(config, function (err) {
 
4. On successful connection with the database, use sql.request object to execute query to database table and fetch the records.
5. Sends records as a response

if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from users', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

6. add module.exports = router; at the end of the file

7. Run node server.js or npm start command 

8. point your browser to http://localhost:3000 
