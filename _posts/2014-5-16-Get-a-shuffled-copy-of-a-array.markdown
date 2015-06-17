---
layout: post
title:  "Get a shuffled copy of a array"
date:   2014-5-16
categories: JavaScript
---

```js
var shuffle = function(arr) {
    var len = arr.length,
        shuffled = Array(len);

    for (var index = 0, rand; index < len; index++) {
        rand = Math.floor(Math.random() * (index + 1));
        if (rand !== index) shuffled[index] = shuffled[rand];
        shuffled[rand] = arr[index];
    }

    return shuffled;
};
```

see more: <a href="http://underscorejs.org/" target="_blank">underscorejs</a>
