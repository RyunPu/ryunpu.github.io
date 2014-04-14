---
layout: post
title:  "Detecting mobile devices"
date:   2014-03-31
categories: Javascript
---

simply using the function below:

```js
function detectMobile(mobileType){
    var ua = navigator.userAgent.toLowerCase(),
        isPhone = /iphone|ipod|android|phone|opera mobi|opera mini|ucbrowser|ucweb|iemobile|nokia|symbian|symbianos|blackBerry|palm|smartphone/i.test(ua);
        isTablet = /ipad|android 3|tablet|playbook|xoom|kindle/i.test(ua);
    
    if (mobileType) {
        switch (mobileType) {
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

<script>document.write(detectMobile(), detectMobile('phone'), detectMobile('tablet'))</script>