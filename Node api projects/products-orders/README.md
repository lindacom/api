1. Create a node project
===========================

1. Open visual studio code. Open a terminal and navigate to the required directory (e.g desktop)
2. Make a new directory using the command mkdir <directoryname>
3. download node js from nodejs.org

In the commandline:
4. navigate into the directory you just created and enter the command npm init (you can enter package name, description entery point - index.js

In visual studio code: 
7. go to file > open folder and open the directory you have created. N.b. you will see a package.json file has been created

2. Add dependencies
=================

express - a framework for node.js. Express router is used for registering different routes and endpoints.

In visual studio code open a terminal and install express - enter the command npm install --save express

Files
========
Server - requires app and creates server using app
app - requires express and contains the routes
products route uses the products.js file which defines all product routes

3. Create files
=============

Server.js
----------
In visual studio code create a new file called server.js.  This file imports the app file and uses port 3000. app is also passed to createserver.

```
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
```

app.js
-------
Create a file called app.js to execute an express application. This file also imports the dependencies and routes.

```
const express = require('express');
const app = express();
```

Add a get route for the application:

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
 
define body request and response in the router file:

```
router.post('/', function (req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'handling post requests to /products',
    // return the body properties
        createdProduct: product
    });
});
```
 
 Error handling
 --------------
 
 In the app.js file enter the following code
 
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
 
 Extract request body
---------------------
When user posts a request with json body return the body in the response. 

1. Install package npm install --save body-parser
2. import body-parser in the app file - const bodyParser = require('body-parser');
3. Use body parser in the app file 

```
app.use(bodyParser.urlencoded({etended: false}));
app.use(bodyParser.json());
```
CORS - cross origin resource sharing
-------------------------------------

You can disable CORS by sending headers from the server to the client that tells the browser the client can have access.

```
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
```
 
 add this to the end of the app file:
 
 module.exports = app;
 
Create routes using express router
===================================
Create a router file. In the router file enter the following:

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

Accept uploading an image
-------------------
The multer package reads form data request. To accept file upload:

npm install --save multer 
Import multer in the router file

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

In the post route pass the file upload as an argument 

```
router.post('/', upload.single('productImage'), function (req, res) {
    console.log(req.file);
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'handling post requests to /products',
    // return the body properties
        createdProduct: product
    });
});
```
An uploads folder will be created.
start the server - npm start
In postman make a post request using body form-data and add key value pairs (name, price, productImage (hover over the key field and select file from the dropdown 
and upload a file.)

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

Authentiction
--------------
Client sends auth data to the server (e.g. email)
Server stores or checks data in the database.  Server returns token
Client can store the token and use it for future requests

a token is json data about the user (e.g. id) and a signature. Signaure can be verified on the server. N.b. token is not encryted

To add authentiction you need users. model
create login and signup routes and import the user model

node.bycrypt package for hashing passwords


Tutorial
========
**creating a restful api with node.js - https://www.youtube.com/watch?v=blQ60skPzl0&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=3**
