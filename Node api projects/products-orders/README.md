Create a node project
=======================

1. Open visual studio code and open a terminal and navigate to the required directory
2. Make a new directory using the command mkdir node-rest-shop
3. navigate into the directory
4. download node js from nodejs.org then in the directory enter the command npm init (you can enter package name, description entery point index.js
5. In visual studio code go to file > open folder and open the directory you have created. you will see a package.json file has been created

Add dependencies
=================

express - a framework for node.js. Express router is used for registering different routes and endpoints.

Server - requires app and creates server using app
app - requires express and contains the routes
products route uses the products.js file which defines all product routes

6. In visual studio code open a terminal and install express - npm install --save express

Create a server
================
8. In visual studio code create a new file called server.js.  This file imports the app file and uses port 3000. app is also passed to createserver.

```
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
```

Create the application
========================
10. Create a file called app.js to execute an express application. This file also imports the dependencies and routes.

```
const express = require('express');
const app = express();
```

Add a get route

```
app.get('/', function (req, res) {
    res.send('Hello world!')
  });
```

Use a file that specifies various routes:

```
const productRoutes = require('./api/routes/products');
 app.use('/products', productRoutes);
 ```
 
 Error handling
 --------------
 ```
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
 ```
 
 add this to the end of the file:
 
 module.exports = app;
 
Create routes using express router
===================================
```
var express = require('express');
var router = express.Router();
```

Conditional routes:

```
router.get('/:productId', function (req, res) {
    const id = req.params.productId;
    if(id === 'special') {
    res.status(200).json({
        message: 'you discovered the special id',
        id: id
    });
} else {
    res.status(200).json({
        message: 'you passed an id'
    });
}

});
```

add this to the end of the file:

module.exports = router;

Run the application
=======================
12. run the application - node server.js
13. open the browser to localhost port 3000 - http://localhost:3000/

N.b. whenever you make a change to files you need to restart the server. Alternatively you can install a package called nodemon to automaticaly 
restart server when change is made

1. npm install nodemon
2. in the package.json file add "start": "nodemon server.js" in the scripts section
3. then to start the application enter npm start in the commandline

logging package for node js 

1. npm install --save morgan 
2. then add the package to the app file - const morgan = require('morgan'); 
3. use morgan in the app file - app.use(morgan('dev'));



Tutorial
========
**creating a restful api with node.js - https://www.youtube.com/watch?v=blQ60skPzl0&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=3**
