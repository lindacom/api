Make JWT-authenticated requests to the Wordpress API
=====================================================
Some requests (mainly, POST requests) must be authenticated. You can use a plugin such as JWT Authentication for WP REST API. 

Install the plugin
------------------
1. In the WordPress plugin dashboard download and install the plugin
2. Modify some core Wordpress files as follows (as detailed in the plugin instructions):

In the .htaccess file included in the Wordpress installation's root folder, we need to add the following lines:

```
RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]

```

In the wp-config.php file, also included in the Wordpress installation's root folder, we need to add these lines:

```
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key'); // Replace 'your-top-secret-key' with an actual secret key. You can get instructions on 
how to do this in the file

define('JWT_AUTH_CORS_ENABLE', true);

```

3. Make a POST request (e.g. AJAX call) for a token to the Wordpress API: http://example.com/wp-json/jwt-auth/v1/token // you can test the post request in an application
such as POSTMAN
