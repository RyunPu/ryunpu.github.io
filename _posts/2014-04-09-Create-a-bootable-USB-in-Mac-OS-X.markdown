---
layout: post
title:  "Create a bootable USB in Mac OS X"
date:   2014-04-09
categories: Mac
---

just follow the steps:

```bash
hdiutil convert -format UDRW -o destination_file.img source_file.iso
```

```bash
diskutil list
```

```bash
diskutil partitionDisk /dev/disk2 1 "Free Space" "unused" "100%"
```

```bash
dd if=destination_file.img.dmg of=/dev/disk2 bs=1m
```

note: 'disk2' is your USB, you may need to use 'sudo dd'

see more: <a href="http://blog.tinned-software.net/create-bootable-usb-stick-from-iso-in-mac-os-x/" target="_blank">bootable usb</a>