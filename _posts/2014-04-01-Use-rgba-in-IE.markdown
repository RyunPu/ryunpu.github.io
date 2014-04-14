---
layout: post
title:  "Use rgba() in IE"
date:   2014-04-01
categories: CSS
---

```css
.class { background: rgba(0,0,0,.5); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7F000000",endColorstr="#7F000000");}
:root .class { filter: none;} /* IE9 */
```

with <a href="http://sass-lang.com/" target="_blank">Sass</a>, you can use:

```css
.class { background: rgba(0,0,0,.5); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#{ie-hex-str($color)}",endColorstr="#{ie-hex-str($color)}");}
```

Tools: <a href="http://kilianvalkhof.com/2010/css-xhtml/how-to-use-rgba-in-ie/" target="_blank">kilianvalkhof</a>