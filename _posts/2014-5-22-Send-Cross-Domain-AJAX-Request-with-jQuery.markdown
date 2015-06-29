---
layout: post
title:  "Send Cross Domain AJAX Request with jQuery"
date:   2014-5-22
categories: JavaScript
---

### USING JSONP

```js
$.ajax({
    dataType: 'jsonp',
    jsonpCallback: 'callback',
    url: url,
    success: function(data) {

    }
});
```

a php file:

```php
require_once "jssdk.php";
$jssdk = new JSSDK("", "");
$signPackage = $jssdk->GetSignPackage();

$arr = array();
$arr['appId'] = $signPackage["appId"];
$arr['timestamp'] = $signPackage["timestamp"];
$arr['nonceStr'] = $signPackage["nonceStr"];
$arr['signature'] = $signPackage["signature"];

if (isset($_GET['callback'])) {
    echo $_GET['callback'].'('.json_encode($arr).')';
}
```
### UING CORS

```js
$.ajax({
    type: 'POST',
    dataType: 'json',
    data: {},
    url: url,
    success: function(data) {

    }
});
```

To enable CORS, You need to specify below HTTP headers in the php file,

```php
header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
```

or in your htaccess:

```
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, PUT, POST, DELETE, OPTIONS"
```

see more: <a href="http://hayageek.com/cross-domain-ajax-request-jquery/" target="_blank">hayageek</a>