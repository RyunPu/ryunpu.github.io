---
layout: post
title:  "Access localhost in Mac OS X"
date:   2014-04-10
categories: Mac
---

just follow the steps:

* In VirtualBox > Preferences > Network, set up a host-only network

* Activate the 2nd adapter and set it with Host-only Adapter and the only Name attribute we just created like 'vboxnet0'

* In C:\WINDOWS\system32\drivers\etc, you may want this configuration for convenience

```
196.168.56.1    localhost
```

note: if you are using <a href="http://gruntjs.com/" target="_blank">gruntjs</a>, you may change the 'hostname' to '0.0.0.0' 

see more: <a href="http://www.justinmarsan.com/blog/hacks/2012/11/15/mac-osx-virtualbox-windows-localhost-mamp/" target="_blank">justinmarsan</a>