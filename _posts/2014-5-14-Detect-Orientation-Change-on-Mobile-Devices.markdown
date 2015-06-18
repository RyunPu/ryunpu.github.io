---
layout: post
title:  "Detect Orientation Change on Mobile Devices"
date:   2014-5-14
categories: Mobile
---

* Media Queries:

```css
@media screen and (orientation: landscape) {
    /* landscape */
}
@media screen and (orientation: portrait) {
    /* portrait */
}
```

* resize Event:

```js
window.addEventListener('resize', function() {
    if (window.innerWidth > window.innerHeight) {
        // landscape
    } else {
        // portrait
    }
}, false);
```

* orientationchange Event:

```js
window.addEventListener('orientationchange', function() {
    switch (window.orientation) {
        case -90:
        case 90:
            // landscape
            break;
        default:
            // portrait
            break;
    }
}, false);
```
