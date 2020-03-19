The advantage of the wordpress api is that you can perform CRUD operations from anywhere you don't always have to navigate to the dashboard.

Using wordpress as the database.

View the wordpress api
======================

At the end of your blog url enter /wp-json/wp/v2/posts to view a json of last ten posts. slug means the shorthand url

Nb. to view less posts at the end of the url enter ?per_page=2

Nb. to view categories you need to enter the cateory id ?categories=3.  You can also add &per_page=1 to the url to filter this down further.

Nb. to view pages, media etc. replace posts in the url with the required data type.

1. button click to insert posts using Javascript and the api. (main.js
