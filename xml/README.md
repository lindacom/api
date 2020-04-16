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

WSDL - service description file in xml.

SOAP
-----
SOAP - Simple Object Access Protocol. xml based protocol for accessing web services.  A SOAP message is an ordinary XML document containing the following elements:

<li>envelope element(mandatory) - identifies xm document as a soap message.Defines the start and the end of the message. It is a mandatory element.The SOAP envelope is specified using the ENV namespace prefix and the Envelope element.</li>
<li>header element (optional) - Contains any optional attributes of the message used in processing the message (e.g. digital signature, account number). A SOAP Header can have the following two attributes Actor attribute
The SOAP protocol defines a message path as a list of SOAP service nodes. Each of these intermediate nodes can perform some processing and then forward the message to the next node in the chain. By setting the Actor attribute, the client can specify the recipient of the SOAP header.

MustUnderstand attribute
It indicates whether a Header element is optional or mandatory. If set to true, the recipient must understand and process the Header attribute according to its defined semantics, or return a fault.</li>
<li>body element (mandatory) -  Contains the XML data comprising the message being sent (call and response information). It is a mandatory element.</li>
<li>fault element (optional) - errors and status information that occur while processing the message (e.g. version mismatch, information not understood, client error, server error).The SOAP fault mechanism returns specific information about the error, including a predefined code <faultCode>, a description <faultString> <detail>, and the address of the SOAP processor that generated the fault <faultActor>.</li>

```
<?xml version = "1.0"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV = "http://www.w3.org/2001/12/soap-envelope" 
   SOAP-ENV:encodingStyle = "http://www.w3.org/2001/12/soap-encoding">

   <SOAP-ENV:Header>
       <t:Transaction 
         xmlns:t = "http://www.tutorialspoint.com/transaction/" 
         SOAP-ENV:mustUnderstand = "true">5
      </t:Transaction>
   </SOAP-ENV:Header>
   <SOAP-ENV:Body>
      <m:GetQuotation xmlns:m = "http://www.tp.com/Quotation">
         <m:Item>Computers</m:Item>
      </m:GetQuotation>
      <SOAP-ENV:Fault>
         ...
         ...
      </SOAP-ENV:Fault>
      ...
   </SOAP-ENV:Body>
</SOAP_ENV:Envelope>
```
N.b. Normally, the application defines a schema to contain semantics associated with the request and response elements.

SOAP includes a built-in set of rules for encoding data types. It enables the SOAP message to indicate specific data types, such as integers, floats, doubles, or arrays. The encoding style for a SOAP message is set via the SOAP-ENV:encodingStyle attribute.

SOAP arrays have a very specific set of rules, which require that you specify both the element type and array size. To create an array, you must specify it as an xsi:type of array. The array must also include an arrayType attribute.

SOAP is not tied to any transport protocol. SOAP can be transported via SMTP, FTP, IBM's MQSeries, or Microsoft Message Queuing (MSMQ).

SOAP via http
==============
requests and responses are required to set their content type to text/xml.



SOAP with http post
--------------------
The following example illustrates the use of a SOAP message within an HTTP POST operation, which sends the message to the server.
The OrderEntry reference in the HTTP header is the name of the program to be invoked at the tutorialspoint.com website.
```
POST /OrderEntry HTTP/1.1
Host: www.tutorialspoint.com
Content-Type: application/soap;  charset="utf-8"
Content-Length: nnnn

<?xml version = "1.0"?>
<SOAP-ENV:Envelope 
   xmlns:SOAP-ENV = "http://www.w3.org/2001/12/soap-envelope" 
   SOAP-ENV:encodingStyle = " http://www.w3.org/2001/12/soap-encoding">
   ...
   Message information goes here
   ...
</SOAP-ENV:Envelope>
```
Using PHP to send a SOAP request and read and xml response
===========================================================

create a soap client/server
