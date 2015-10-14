---
layout: post
title:  "Detect mobile devices"
date:   2014-03-31
categories: Mobile
---

```js
function isMobileDevice() {
    return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
```

or

```js
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert('Mobile Detected');
}
```

see also: <a href="https://github.com/hgoebl/mobile-detect.js" target="_blank">mobile-detect</a>