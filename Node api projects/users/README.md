Users api
==========

http://localhost:3000/users

Database
-----------
Sql server database.  Users table.

Install driver
---------------
Install mssql driver using npm command, npm install mssql in the command prompt.

Files
-----
server.js
app.js
users.js

app.js file
-----------
1. import mssql module in the app.js file
2. Require the router file
3. Route requests to the router file

users.js file
--------------
1. require express
2. imports the module
3. passes config object which includes database information
4. calls connect() method to connect with database.
5. use sql.request object to execute query to database table and fetch the records.
6. Sends records as a response

start the application
-------------------
1. Run node server.js or npm start command
2. point your browser to http://localhost:3000

