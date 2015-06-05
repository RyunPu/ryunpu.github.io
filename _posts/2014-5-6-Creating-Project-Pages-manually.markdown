---
layout: post
title:  "Creating Project Pages manually"
date:   2014-5-5
categories: Git
---

```bash
cd repository
```

```bash
git checkout --orphan gh-pages
```

add and commit some pages and then:

```bash
git push origin gh-pages
```

your Project Pages site will be available at ```https://username.github.io/projectname```

see more: <a href="https://help.github.com/articles/creating-project-pages-manually/" target="_blank">GitHub Pages Basics </a>