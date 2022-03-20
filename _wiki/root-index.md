---
layout: wikiindex
title: wiki
toc: true
public: true
comment: false
updated: 2022-03-20 18:03:43 +0900
regenerate: true
---



## blog posts

<div>
    <ul>
{% for post in site.posts %}
    {% if post.public == true %}
        <li>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                {{ post.title }}
            </a>
        </li>
    {% endif %}
{% endfor %}
    </ul>
</div>
