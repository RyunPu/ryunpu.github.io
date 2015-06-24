---
layout: post
title:  "Use Cookie"
date:   2014-5-19
categories: JavaScript
---

```js
function getCookie(cname) {
    var name = cname + "=",
        ca = document.cookie.split(';'),
        c;

    for(var i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }

    return '';
}
```

```js
function setCookie(cname, cvalue, exdays) {
    var d = new Date(),
        expires;

    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
```
