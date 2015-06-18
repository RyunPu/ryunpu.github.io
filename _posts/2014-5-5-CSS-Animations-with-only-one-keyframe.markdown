---
layout: post
title:  "CSS Animations with only one keyframe"
date:   2014-5-5
categories: CSS
---

a simple animation:

```css
@keyframes fade {
    0% { opacity: 1;}
    50% { opacity: 0;}
    100% { opacity: 1;}
}
```

more simple:

```css
@keyframes fade {
    50% { opacity: 0;}
}
```
see also: <a href="http://easings.net/zh-cn" target="_blank">transition-timing-function</a>