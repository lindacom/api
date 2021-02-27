Authentication
===============

Setup
-----
- grant and request access to resource
- traits for authentication
- add authentication headers

API gateway and proxy
restrict access to an api
SLA based policy

There are various types of authentication methods. All authentication requires encryption.

Security certificates
-----------------------
TLS encryption includes https, key, token, username, password. See letsencrypt.org for free https encryption.

Basic authentiation (one step)
--------------------

Username and password authentication. This should be used for development testing only as it's the least secure.

JWT authentication (two step - login, token)
------------------
How it works:
1. post username and password
2. JWT gnerates a token which lasts for the duration of the session
3. Send a request with the token
4. Checks that the token is correct and sends a response back

OAuth2 authentication (three step - register, login, token)
----------------------
How grant flow works in Wordpress using OAuth plugin:

1. Rgister
2. Client directs to WordPress to authenticate
3. Login
4. Temporary access token is created
5. Send a request
6. Token is generated

You can use the JSO library to handle OAuth. 

1. Download and install the OAuth plugin then go to oauth server menu > client. 
Register your application as a client (enter name and url). Check authentication code and check implicit checkboxes. Make a note
of the client ID.
2. From the JSO website copy code for setting a new JSO (uses client id, url and authorisation url (/oauth/authorize)
3. copy function for catching response after login jso.callback();
4. Copy code for wiping token on logout
5. Get OAuth token jso.gettoken();
6. Make a request.  Before the ajax function to create a post you can add jso.enablejquery($); then chang the .ajax to jso.ajax

Cookie authentication
----------------------
Stateful because browser and server keep the details.
How it works:

1. Login
2. Session is created
3. Cookie with session key is sent to the browser
4. Request matched to the sessio
5. Logout - cookie removed

CSFR and Nonce (number used once)

Nonce

How it works

1. Login
2. Nonce hash is generated.  It lasts one day and then another hash is generated
3. User action - nonce is passed in the url
4. Matches nonce to records

In ajax you put the nonce in the request header. WordPress example:
```
$.ajax({
  url: "test.html",
before send: function (xhr) {
xhr.setRequestHeader('X-WP-nonce', WP Settings.nonce);
},

});
```

