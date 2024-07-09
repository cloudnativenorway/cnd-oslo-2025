---
layout: base
title: "Program"
---

<ul>
    {% for item in mydata %}
    <li>{{ item.title }} - {{ item.description }}</li>
    {% endfor %}
</ul>

