<h2>Project</h2>

Create web pages and make various AJAX calls to the WordPress REST API
```
<ul>
 <p><strong>Landing page</strong></p>
 <li>display all posts  category </li>
 <li> GET a single post by id on clicking read more button using endpoint /posts/$post_ID	</li> 
 <li>display posts by category </li>  
<li>pagination </li>

<p><strong>Add a post page</strong></p> 
<li>CREATE a post using endpoint /posts/new</li>
<li>POST create a new using the endpoint category /categories/new	</li>

<p><strong>Comment and reviews page</strong></p> 
<li>POST like a post using the endpoint /posts/$post_ID/likes/new</li>
<li> GET a list of recent comments using the endpoint /comments</li>
<li>POST create a comment using the endpoint /posts/$post_ID/replies/new	 </li>

<p><strong>Login page</strong></p> 
<li>GET logged in user profile link using endpoint /me/settings/profile-links/</li>

<p><strong>Admin page</strong></p> 
<li>UPDATE a post </li>
<li>POST upload media /media/new</li>
<li>GET /batch/	Run several GET endpoints and return them as an array.</li>
</ul>
```
