---
layout: post
title:  "Code conventions and best practices for javascript"
date:   2014-04-11
categories: Javascript
---

* JavaScript programs should be stored in and delivered as .js files

* script tags should be placed as late in the body as possible, There is no need to use the language or type attributes

* The unit of indentation is four spaces

* Avoid long lines

* Be generous with comments

<!-- more -->

* It is preferred that each variable be given its own line and comment, They should be listed in alphabetical order if possible, variables that are only declared but do not get a value assigned may be declared on the same line

* When a function is to be invoked immediately, the entire invocation expression should be wrapped in parens

* The with statement should not be used

* Use the === and !== operators

* eval is Evil

* Do not pass strings to setTimeout or setInterval

* Function Declarations Within Blocks: No

* Always preferred over non-standards features(e.g. string.charAt(3) over string[3])

* In case a variable contains a jQuery object, the variable can start with $

* Variables should not be defined in the global scope

* Use the module pattern to encapsulate

* Namespace your JavaScript if you need to refer to it elsewhere

* When optimizating, focus on the big things

    * Excessive DOM changes that force the page to re-render
    
    * Events that get fired all the time (for example, resizing/scrolling)
    
    * Lots of HTTP requests (and even this is becoming less important)


* Lazy load assets that aren't immediately required

* Causing excessive document reflows(DOM modification is slow)

* Going overboard with file concatenation

see more: <a href="http://javascript.crockford.com/code.html" target="_blank">crockford</a>, <a href="https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml" target="_blank">googlecode</a>, <a href="https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md" target="_blank">best-practices</a>