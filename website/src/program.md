---
layout: base
title: "Program"
---

# Program

Stuff loaded from json file

<ul>
    {% for item in mydata %}
    <li>{{ item.title }} - {{ item.description }}</li>
    {% endfor %}
</ul>

