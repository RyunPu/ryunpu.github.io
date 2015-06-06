---
layout: post
title:  "Modifying an inactive pull request locally"
date:   2014-5-8
categories: Git
---

```bash
git fetch origin pull/ID/head:BRANCHNAME
```

```bash
git checkout BRANCHNAME
```

When you're ready, you can push the new branch up:

```bash
git push origin BRANCHNAME
```

see more: <a href="https://help.github.com/categories/collaborating/" target="_blank">collaborating</a>