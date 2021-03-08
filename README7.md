PSR7 deals with http messages - requests and responses.  Includes the ability to write middleware - sits between API and end user.  
Middleware can modify or stop request or response.

Middleware
===========
Middleware - troutes, authorisation (used for logging), exceptions, CORS

rate limit
authentication (headers)

application has middleare.  Middleware has a method that calls next middleware layer.
Each layer can modify requrest and response.

Logging middleware
--------------------
1. To create a middleware called logging enter the following command: php artisan make:middleware logging
2. Go to app > http > middleware > loggingphp. The class has a handle function that takes a request and the next instance (middleware class to call)
3. In the file use the log fascade. To log the http method for the request enter the follwing in the function: Log::debug($request->method());
4. To add the middleware layer to the application go to app > http > kernel.php (contains middleware groups for the different routes - web and api)
In the api array add the new middlewre class \app\http\middleware\Logging::class
5. In Postman send a request
6. Look at logs in storage > logs > laravel.log at the bottom of the file you will see the request

Class for adding header information
------------------------------------

To create a class for adding header information to a response
1. Create a middleware file
2. In the handle function enter a resonse header name and alue

$response = $next($request);
$response->header('X-Jobs', 'come work with us');
return $response;

3. Add the class to the api group in the app > http > kernel.php file
4. In Postman send a request
5. In the response you will see headers has X-job header

Authentication and authorisation 
==================================
authentication - a token identifies a user (username and password)
authorisation - identifies user has access.  Authorises access to a resource.

Token authentication
----------------------
Pass a token in the header or in the url.  Uses a middleware. If header does not equal value stop request
To create token middleware

1. Create a new middleware file php artisan make:middleware TokenAuth
2. Go to app > http > middleware > TokenAuth.php. Enter code in the handle function

N.b. you can validate token using string, database etc.

3. Add class to kernelphp file in the api section
4. In Postman send a request. You should receive a 401 unauthorised response
5. Make a request with a header and value.  Request should now work.

N.b. token authentication is not secure as token can be shared and reused.

Basic authentication
------------------------

Send username and password as header. 

1. Make middleware called basicauth php artisan make:middleware bsicauth. Use Laravel built in auth in the file use the auth fascade.
2. validate using basic authentication and if successful go to next request. In the handle function enter
return Auth::once Basic() ?:$next($request);

3. Register middleware in the kernel.php file
4. Login to SSMS
5. In the database > users table copy a user (email address)
6. In Postman request header select auth > basic auth. Enter username and password, ecret and send request.

N.b. bsic authentication is note secure because if you are not using SSL anyone can read the username and password.

Oauth2
------
Gives access using username and password without giving out credentials  

N.b. Oauth2 authentication is the most protected. Both users and servces can control services.

Grant a service api credentials to talk to the api
client -> authorization service -> client -> api service

Grant types
============
- authorisation code
- password
- client credentials

scope - define the access a service can use

Send to authorisation server with client ID, redirect uri. Pass back code used with applications

Setting up OAuth in Laravel
==============================
Laravel has tools
1. generate authentication scaffolding by running the command php artisan make:auth
2. add composer package for supporting oauth2. Enter command composer require laravel/passport:7.5.1
3. run migrations to add new database fields by running command php artisan migrate
4. run php artisan passport:install. This creates two clients with an id and secret
5. open the user model class app > user.php. Use Laravel\Passport\hasAPITokens at the top of the file Also add has api tokens t the include traits to use
6. Add routes provider to list of service providers app > providers > route service provider.  In the file use Laravel\Passport\Passport
In the map function add Passport::rates();

N.b. passport is a wrapper for OAuth2 implementation.  User model knows how to use the tokens generated added routes for the service to the aplication

To let the appliation know you are using passport:

1. Go to config > auth.php
2. In the api authentication guards section change the driver from token to passport

Creating and setting tokens
---------------------------
Create a new project called client server. This is a client app to get tokens to talk to the api server
1. change directory cd ..
2. enter the command composer create-project --prefer-dist laravel/laravel client-server
3. go to the client server directory cd ./client server
4. add the composer dependency called Guzzle using the command composer require guzzlehttp/guzzle
5. create two routes for the client application - redirect url and callback url. In the client server laravel project go to routes > web.php
6. add code
7. go to the directory of the laravel api project and run the comand to create a new client php artisan passport:client
8. assign the client id to the user id 1
9. enter a client name e.g. client server
10. enter where you want to redirect request to after authorisation http://127.0.1.1/8001/callback
11. copy the client secret enerated
12. In the client server project web.php file in the get/callback route replace the client secret with the copied secret and id
13. change the client id in the $query = http_build_query section also
14. open the laravel api project in the browser
15. open client server project in the browser on port 8001 php artisan serve --port 8001.  go to the url /redirect. Login with details from the database

you will then be redirected to an authorisation request page. (Checking whether client-server should be able to access the account)

16. Click authorise button.
17. json page is displayed with an access token field to enable access to the api. Copy the access token to enable access to the api Copy the access token.
exires in field shows how long token will last for.
18. In the Laravel api project go to app > http > kernel.php file.  In api protected middleware group enter 'auth:api'
19. In postman make a request that accepts bearer token  paste the token and send request.

build an application that cn access api using bearer token



