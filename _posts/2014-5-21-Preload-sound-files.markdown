---
layout: post
title:  "Preload sound files"
date:   2014-5-21
categories: JavaScript
---

```js
function preloadFiles(files, onComplete, onProgress) {
    var filesLoaded = 0,
        arr = [];

    for (var i = 0, len = files.length; i < len; i++) {
        arr[i] = new Audio();
        arr[i].addEventListener('canplaythrough', function() {
            filesLoaded++;
            if (filesLoaded === len && typeof onComplete === 'function') onComplete();
            if (typeof onProgress === 'function') onProgress(filesLoaded, len);
        }, false);
        arr[i].src = files[i];
        arr[i].load();
    };
}
```
