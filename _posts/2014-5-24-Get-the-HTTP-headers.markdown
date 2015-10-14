---
layout: post
title:  "Get the HTTP headers"
date:   2014-5-24
categories: JavaScript
---

```js
var req = new XMLHttpRequest();
req.open('GET', document.location, false);
req.send(null);
var headers = req.getAllResponseHeaders().toLowerCase();
alert(headers);
```
