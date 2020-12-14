Connecting to an api
========================
There are several ways to connect to an api

1. xmlHttpRequest = create request object, open connction (get request, url), onload request function (to do something with the response (e.g. parse data, print etc), send
request
2. Jquery - request and load data asynchrnously. Ajax method includes url and success function. N.b. has a simplr get method which can be used. N.b. you must include jquery in the header of the page





Working with JSON data
==========================
Json data is returned as a string. You ant to convert the string to a json object. This is known as parsing data.  To parse data use the javascript method JSON.parse()
The method takes the response e.g. from the api. Use the dot notation to access an objects properties and methods.

N.b. Json objects can sometimes be seen as an array of objects. You can access using array syntax (bracket)

N.b you can use JavaScript operator called typeof to see what kind of data you are orking with

N.b. you can use the json formatter chrome extension to view rawparsed data

Authentication in Postman
==========================

Gain authentication token
----------------------------
To use an API a valid authentication token must be passed as part of the call.

Open postman and and select post option
In the url field enter the authentiction url (e.g. https://localhost/api/oauth2/token
Select the authorisation tab and select the tpe as basic auth. Enter userame and password
Select the body tab, select the radio button x-www-form-urlencoded, enter 'code' in the key column and enter the access code in the value column. Enter 'grant_type' in the key column
and enter 'authorization_code' in the value column.
Click send ad a resonse will be received which shows the auhorization token granted.
make a note of the token value.

Using authentication token for POST methods
-------------------------------------------

Select POST from the dropdown
Enter the url for the api in the url field
Select the autorsation tab, select bearer token, in the token field paste the access token
Select the headers tab.  The authorization value field should already be populated with bearer access token
Enter 'Content-Type' in the key column and enter 'application/json in the value column
Selec the body tab and select the raw radio button select JSON application/json from the dropdown menu
Type in the call that you wish to make
Click send and you should receive a return.

