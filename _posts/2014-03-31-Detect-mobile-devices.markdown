---
layout: post
title:  "Detect mobile devices"
date:   2014-03-31
categories: Mobile
---

```js
function detectMobile(deviceType){
    var ua = navigator.userAgent.toLowerCase();
    var isPhone = /iphone|ipod|android|phone|opera mobi|opera mini|ucbrowser|ucweb|iemobile|nokia|symbian|symbianos|blackBerry|palm|smartphone/i.test(ua);
    var isTablet = /ipad|android 3|tablet|playbook|xoom|kindle/i.test(ua);
    
    if (deviceType) {
        switch (deviceType) {
            case 'phone':
                return isPhone;
            case 'tablet':
                return isTablet;
        }
    } else {
        return (isPhone || isTablet);
    }
}
```

see also: <a href="https://github.com/hgoebl/mobile-detect.js" target="_blank">mobile-detect</a>