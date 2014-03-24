---
layout: post
title:  "预览一篇Jekyll的文章并添加Readmore"
date:   2014-03-21
categories: Jekyll
---

当然，你可以使用Jekyll自带的post.excerpt并在\_config.yml中配置excerpt\_separator，但这样做时并不能灵活的添加’Readmore‘，因此可以使用下面的方法：

<!-- more -->

{% raw %}
    {% if post.content contains '<!-- more -->' %}
        {{ post.content | split:'<!-- more -->' | first }}
        <p class="more"><a href="{{ post.url }}">Read More &raquo;</a></p>
    {% else %}
        {{ post.content }}
    {% endif %}
{% endraw %}

注意在文章中换行书写’<!-- more -->‘