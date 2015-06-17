---
layout: post
title:  "Configuring Web Applications"
date:   2014-5-11
categories: Mobile
---

Specifying a Webpage Icon for Web Clip:

```html
<link rel="apple-touch-icon" href="touch-icon-iphone.png">
<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png">
<link rel="icon" sizes="152x152" href="touch-icon-android.png">
```

Specifying a Startup Image:

```html
<link rel="apple-touch-startup-image" href="/startup.png">
```

Hiding Safari User Interface Components:

```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes"> <!-- android -->
```

Changing the Status Bar Appearance:

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

format-detection:

```html
<meta name="format-detection" content="telephone=no">
```

Linking to Other Native Apps:

```html
<a href="tel:1-408-555-5555">Call me</a>
```

see more: <a href="https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW2" target="_blank">Safari Web Content Guide</a>, <a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html" target="_blank">Safari HTML Reference</a>, <a href="https://developer.apple.com/library/mac/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899" target="_blank">Apple URL Scheme Reference</a>
