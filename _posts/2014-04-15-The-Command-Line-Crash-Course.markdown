---
layout: post
title:  "The Command Line Crash Course"
date:   2014-04-15
categories: Linux
---

print working directory:

```bash
pwd
```

my computer's network name:

```bash
hostname
```

make directory:

```bash
mkdir directory_name
```

change directory:

```bash
cd
```

```bash
cd ~
```

```bash
cd ..
```

```bash
cd -
```

list directory:

```bash
ls
```

```bash
ls -al
```

remove directory:

```bash
rm file
```

```bash
rm -r file
```

push directory:

```bash
pushd
```

pop directory:

```bash
popd
```

making empty files:

```bash
touch file
```

copy a file or directory:

```bash
cp source_file target_file/target_directory
```

```bash
cp -r source_file target_directory
```

move a file or directory:

```bash
mv source target/directory
```

page through a file:

```bash
less/more filename
```

find files:

```bash
find . -name "*.txt" -print
```

find things inside files:

```bash
grep pattern file
```

read a manual page:

```bash
man name
```

look at your environment:

```bash
env | grep PATH
```

export/set a new environment variable:

```bash
export TESTING = "bada bada bing"
```

```bash
unset TESTING
```

print some arguments:

```bash
echo TESTING
```

change permission modifiers:

```bash
chmod
```

change ownership:

```bash
chown
```

create a zip file:

```bash
zip -r filename *
```

see more: <a href="http://cli.learncodethehardway.org/book/" target="_blank">The Command Line Crash Course</a>, <a href="http://cli.learncodethehardway.org/bash_cheat_sheet.pdf" target="_blank">Linux Bash Shell Cheat Sheet</a>, <a href="http://ss64.com/bash/chmod.html">chmod</a>