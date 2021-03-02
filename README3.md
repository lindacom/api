API Implementation 
====================

build and test, manage, secure, scale an api.

Create database 
---------------

1. download sql server 2019 developer free edition from microsoft.com N.b Sql server configuration manager will also be installed 
2. Make a note of instance name, connection string and sql administrators
3. Click connectnow button
4. Create database using sqlcmd

sql server database commandline
---------------------------------
from the start menu open sqlcmd

To create a database enter:

CREATE DATABASE LaravelDatabase
GO

To view databases enter:

EXEC sp_databases
GO

VIEWING TABLES

Listing all the tables in SQL server when using a newer version (SQL 2005 or greater) is a matter of querying the INFORMATION_SCHEMA views which are automatically built into SQL Server.

To view all tables enter:

SELECT * FROM INFORMATION_SCHEMA.TABLES;
GO

Create tables
-------------
6. Install or open SSMS
7. In the connect to server box enter localhost in the server name field
8. Select windows authentication from the authentication dropdown. The username should then be populated from your computer
9. Click connect
10. Expand the databases folder
11. Right click the database you have created and selct new query
12. In the query window enter T-sql code to create tables. Execute the query by clicking the execute button 
13. Expand the tables folder. You should see the table you created
14. To add table content right click the table and select edit rows and enter data in the columns

To create a table in SSMS right click the database and select new query. Enter:

CREATE TABLE dbo.reviews  
   (reviewID int IDENTITY(1,1) PRIMARY KEY NOT NULL,  
   customerID int NOT NULL,  
   bookTitle  varchar(255) NULL,  
   description varchar(max) NULL,
   reviews varchar(255) NULL
 )

Build the api
==============
Packages required are PHP and Composer.
Open a terminal and create a Laravel project using the command composer create-projec --prefer-dist laravel/laravel projectname
Go to the directory of the project using the cd command
run the project using the command php artisan serve
Open the project in a browser window

In the Laravel project create the files for the api:

Routes > api.php - contains the endpoint

Database
=========
Add database credentials to a Laravel project
----------------------------------------------
3. Open project folder in VS code
4. In the Laravel project add database credentials to the .env file - host, port, database, user and password. 

Laravel .env file credentials:

DB_CONNECTION=sqlsrv
DB_HOST=localhost
DB_PORT=1433
DB_DATABASE=LaravelDatabase
DB_USERNAME=laravel
DB_PASSWORD=laravel

6. ensure that in the config > database.php file the default connection is set to sql server.

 'default' => env('DB_CONNECTION', 'sqlsrv'),

 'sqlsrv' => [
            'driver' => 'sqlsrv',
             'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', 'localhost'),
            'port' => env('DB_PORT', '1433'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
 
],

Add data to the database
-------------------------

Open SSMS
Open a terminal and run the command php artisan migrate:fresh --seed

Create the information for a database table by creating a file in database > migrations directory
create data to be inserted into a database table by creatig a file in database > seeds directory
Create factories in database > factories directory.

Migration - versions of the database
seeding - inserts data into the database

run the command php artisan migrate:refresh

Create model files using the command php artisan make:model name

Seed the database by running the command php artisan db:seed
Go to SSMS to see data has now been added to the tables


Access the api in the browser
--------------------------------

API GET ACCESS TO DATABASE

To view database details in api from browser you need to enable tcp/ip and sql server authentication

In sqlserver configuration manager

Click Protocols for the Instance you created
Enable the IP settings
Right click on the IP settings>properties>IP Addresses>IP All>IP Port: Set it to 1433 as default SQL Server database port.

In SSMS

Log in to the Microsoft SQL Server Management Studio
Right-click the server you wish to modify and then click Properties.
Select the Security Page.
Under the Server authentication heading choose SQL Server and Windows Authentication mode.
Click OK.

At this point the SQL server must be restarted. 

In sql server configuration manager right-click the server you have just modified and select Restart.If SQL Server Agent is running, it must also be restarted.

open api project in browser
-----------------------
6. run php artisan serve command and open the project in the browser
7. generate app key if required using the command php artisan key:generate
8. Access the api endpoint in the browser.
