---
layout: post
title:  "Git Diff/Merge with Beyond Compare"
date:   2014-5-17
categories: Tools
---

Launch Beyond Compare, go to the Beyond Compare menu and run **Install Command Line Tools**.

### Diff

In a terminal:

```bash
git config --global diff.tool bc3
```

To launch a diff using Beyond Compare, use the command "git difftool file.ext".

### Merge (Pro only)

In a terminal:

```bash
git config --global merge.tool bc3
```

```bash
git config --global mergetool.bc3 trustExitCode true
```

To launch a 3-way merge using Beyond Compare, use the command "git mergetool file.ext"

see more: <a href="http://www.scootersoftware.com/support.php?zz=kb_vcs_osx" target="_blank">scootersoftware</a>
