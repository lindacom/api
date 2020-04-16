xml files are plain text files saved with the .xml extension. 

<li>xml documents must have a root element.  </li>
<li>Elements must have closing tags. Tags are case sensitive.</li>
<li>Elemens must be properly nested.  Attribute values must be quoted.</li>

Javascript
-------------
Use Javascript to access the text value of an element (e.g. title) in an html document.

```
txt = xmlDoc.getElementByTagName("title")[0].childNodes[0].nodeValue;
```

XSLT
----

You can transform xml data into html using XSLT (extensive stylesheet language transformations).
XSLT uses xpath to find information in an xml document.

xQuery
------
xQuery is used to query xml data using xpath expressions.

xlink
------
xlink is used to create hyperlinks in xml documents. 
You must first declare xlink namespace at the top of the document

xlink:type (creates the link)
href attributes(specify the url to link to)
xlink:show="new" (opens the link in a new window)

xpointer
--------

xpointer is used to point to specific parts of the xml document and uses xpath expressions.  
Add a # and xpointer expression after the url in the xlink:href position.
