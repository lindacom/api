xml
=====
xml files are plain text files saved with the .xml extension. 

<li>xml documents must have a root element.  </li>
<li>Elements must have closing tags. Tags are case sensitive.</li>
<li>Elemens must be properly nested.  Attribute values must be quoted.</li>

```
  <bookstore>
  <book category="children">
    <title>Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book category="web">
    <title>Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>
```

Javascript
-------------
Use Javascript to access the text value of an element (e.g. title) in an html document.

```
txt = xmlDoc.getElementByTagName("title")[0].childNodes[0].nodeValue;
```
get contents of an xml file using Ajax 
```
<h2>Using the XMLHttpRequest Object</h2>
<div id="demo">
<button type="button" onclick="loadXMLDoc()">Get Contents of xml file</button>
</div>

<script>
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "xml.xml", true);
  xhttp.send();
}
</script>
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
Add a # and xpointer expression after the url in the xlink:href attriute.

```
example.com#point
```
Using php simple xml to access and xml file
============================================
```
<?php
$xml = simplexml_load_file('xml.xml');

// echo $xml->book[1]->title.$xml->book[1]->price; single record

foreach ($xml->book as $book) {
  echo $book->title.$book->price;   
} 
?>
```


xml web services
================
Web services communicate using open protocols.

SOAP
-----
SOAP - Simple Object Access Protocol. xml based protocol for accessing web services.  It is strucutred with:

<li>envelope element - identifies xm document as a soap message</li>
<li>header element</li>
<li>body element - call and response information</li>
<li>fault element - errors and status information</li>

Using PHP to send a SOAP request and read and xml response
===========================================================

create a soap client/server
