---
layout: post
title:  "Check for animation support"
date:   2014-5-23
categories: JavaScript
---

```js
function browserSupportsCSSProperty(propertyName) {
  var elm = document.createElement('div');
  propertyName = propertyName.toLowerCase();

  if (elm.style[propertyName] != undefined)
    return true;

  var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
    domPrefixes = 'Webkit Moz ms O'.split(' ');

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
      return true;
  }

  return false;
}

if (!browserSupportsCSSProperty('animation')) {
  // fallback…
}
```

see more: <a href="https://github.com/Modernizr/Modernizr" target="_blank">Modernizr</a>
