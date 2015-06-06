---
layout: post
title:  "Syncing a fork"
date:   2014-5-7
categories: Git
---

```bash
git remote add upstream https://github.com/username/projectname.git
```

```bash
git pull upstream master(git fetch upstream, git merge upstream/master)
```

```bash
git push origin master
```