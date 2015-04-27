---
layout: post
title:  "Use Chrome DevTools"
date:   2014-04-20
categories: Web
---

* Use ```Ctrl/Cmd+Shift+C``` to open the DevTools in Inspect Element mode

* Use ```$()``` command for selecting elements

* Search across all script, stylesheet and snippet files using ```Ctrl/Cmd+O```

* Search across all of the files loaded for a page for a particular string using ```Ctrl/Cmd+Opt+F``` on Mac)

* Navigate to (or search for) specific JavaScript functions or CSS rules within a file using ```Ctrl/Cmd+Shift+O```

* Jump to a specific line-number within the editor using ```Ctrl+G```

* A keyboard shortcut is also available for easily executing a snippet - just select your snippet then use ```Ctrl/Cmd+Enter``` to run it

* Evaluate specific lines of your snippet in the console, you can simply select these within the editor then use ```Ctrl+Shift+E``` 

* Add Folder to Workspace for editing any type of source file within the Sources panel and have those changes persist to disk

* Clear the console's history using ```Ctrl+L```

* Measure how long something takes using ```console.time('xxx')```, to end the measurement call ```console.timeEnd('xxx')```

* Use the ```$_``` helper will allow you to access the last console result

* You can choose one of :active, :hover, :focus or :visited to force the element into one of these states

* You can replay any XHR (POST or GET) by right-clicking on the request to display the context-menu then selecting “Replay XHR”

* Right-click/Ctrl-click anywhere in Network panel and select Clear Browser Cache/Network Cache from context menu

* You can enable ‘Disable cache’ to invalidate the disk cache. This is great for developing, but the DevTools must be visible/open for this to work

see more: <a href="https://developer.chrome.com/devtools" target="_blank">Chrome DevTools</a>