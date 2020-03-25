The advantage of the wordpress api is that you can perform CRUD operations from anywhere you don't always have to navigate to the dashboard.

Using wordpress as the database.

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
