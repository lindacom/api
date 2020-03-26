The advantage of the wordpress api is that you can perform CRUD operations from anywhere you don't always have to navigate to the dashboard.

Read more here https://developer.wordpress.org/rest-api/

Using wordpress as the database.

Routes and endpoints
=====================

API’s index by making a GET request to https://ourawesomesite.com/wp-json/. The index provides information regarding what routes are available 

Query parameters
=================

Results returned
-----------------

add ?per_page=1 to url to specify how many results per page, ?offset=6 to specify start position of posts returned

Number of records
------------------

X-WP-Total: the total number of records in the collection and X-WP-TotalPages: the total number of pages encompassing all available records

Sorting
------

?order=asc order posts ascending ?orderby=date other options are “relevance,” “id,” “include,” “title,” and “slug”

Read - View the wordpress api
======================

At the end of your blog url enter /wp-json/wp/v2/posts to view a json of last ten posts. slug means the shorthand url

Nb. to view less posts at the end of the url enter ?per_page=2

Nb. to view categories you need to enter the cateory id ?categories=3.  You can also add &per_page=1 to the url to filter this down further.

Nb. to view pages, media etc. replace posts in the url with the required data type.

1. button click to insert posts using Javascript and the api. (main.js)
2. On click funcyion to send a GET request
3. insert response data into a div

Return JSON response from AJAX using jQuery and PHP
===================================================

```

$( document ).ready(function() {
  var api_url = 'http://example.com/wordpress/wp-json/wp/v2/posts'
 $.ajax({
        url: api_url,
        contentType: "application/json",
        dataType: 'json',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var date = response[i].date;
                var slug = response[i].slug;
                var excerpt = response[i].excerpt.rendered;
                
                

                var tr_str = "<tr>" +
                    "<td align='center'>" + (i+1) + "</td>" +
                    "<td align='center'>" + date + "</td>" +
                    "<td align='center'>" + slug + "</td>" +
                    "<td align='center'>" + excerpt + "</td>" +
                    
                    
                    "</tr>";

                $("#results").append(tr_str);       
                
        }    
        } 
    });
 });

```
Create - post to WordPress using the API
========================================

Make JWT-authenticated requests to the Wordpress API
-----------------------------------------------------
Some requests (mainly, POST requests) must be authenticated.

1. To use JWT authentication with Wordpress, we first need to install the JWT Authentication for WP REST API plugin
2. modify some core Wordpress files

In the .htaccess file included in the Wordpress installation's root folder, we need to add the following lines:

```
RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]

```

In the wp-config.php file, also included in the Wordpress installation's root folder, we need to add these lines:

```
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key'); // Replace 'your-top-secret-key' with an actual secret key.
define('JWT_AUTH_CORS_ENABLE', true);

```

3. request a token to the Wordpress API: http://example.com/wp-json/jwt-auth/v1/token in POSTMAN to test the POST request
4. make an authenticated request using JQuery AJAX
