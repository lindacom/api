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

