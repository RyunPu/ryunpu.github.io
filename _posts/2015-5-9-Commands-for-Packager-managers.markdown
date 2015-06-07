---
layout: post
title:  "Commands for Packager managers"
date:   2014-5-9
categories: Mac
---

<table>
  <tbody><tr>
    <th></th>
    <th>npm</th>
    <th>composer</th>
    <th>pip</th>
    <th>rubygem</th>
  </tr>
  <tr>
    <td>Language</td>
    <td><code>node -v</code></td>
    <td><code>php --version</code></td>
    <td><code>python --version</code></td>
    <td><code>ruby -v</code></td>
  </tr>
  <tr>
    <td>Version</td>
    <td><code>npm --version</code></td>
    <td><code>composer --version</code></td>
    <td><code>pip --version</code></td>
    <td><code>gem -v</code></td>
  </tr>
  <tr>
    <td>Location of the program file</td>
    <td><code>which npm</code></td>
    <td><code>which composer</code></td>
    <td><code>which pip</code></td>
    <td><code>which gem</code></td>
  </tr>
  <tr>
    <td>List of all packages installed globally</td>
    <td><code>npm ls -g</code></td>
    <td><code>composer show <br>--installed</code> (locally)</td>
    <td><code>pip freeze</code></td>
    <td><code>gem list</code></td>
  </tr>
  <tr>
    <td>Info about a package</td>
    <td><code>npm show <br>[package-name]</code></td>
    <td><code>composer show <br>[package-name]</code></td>
    <td><code></code></td>
    <td><code>gem list <br>[package-name]</code></td>
  </tr>
  <tr>
    <td>Install a package</td>
    <td><code>npm install <br>[package-name] -g</code></td>
    <td><code>composer require <br>[package-name]</code> <br>and run <code>composer install</code></td>
    <td><code>pip install<br>[package-name]</code></td>
    <td><code>gem install <br>[package-name]</code></td>
  </tr>
  <tr>
    <td>Uninstall a package</td>
    <td><code>npm uninstall <br>[package-name] -g</code></td>
    <td>edit composer.json <br>and run <code>composer update</code></td>
    <td><code>pip uninstall<br>[package-name]</code></td>
    <td><code>gem uninstall<br>[package-name]</code></td>
  </tr>
  <tr>
    <td>Outdated packages</td>
    <td><code>npm -g outdated</code></td>
    <td><code>composer update --dry-run</code></td>
    <td><code></code></td>
    <td><code>gem outdated</code></td>
  </tr>
  <tr>
    <td>Updated packages</td>
    <td><code>npm -g update <br>[package-name]</code></td>
    <td><code>composer update</code></td>
    <td><code>pip install<br>--upgrade [package-name]</code></td>
    <td><code>gem update <br>[package-name]</code></td>
  </tr>
  <tr>
    <td>Help</td>
    <td><code>npm help</code></td>
    <td><code>composer help</code></td>
    <td><code>pip help</code></td>
    <td><code>gem help</code></td>
  </tr>
</tbody></table>