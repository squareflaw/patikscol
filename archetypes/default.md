---

title: "{{ replace .TranslationBaseName "-" " " | title }}"
description: {{.Description}}
date: {{ .Date }}
draft: false
author: "Autor numero 1"
tags:
  -"mascotas"
  - "salud"
categories: "posts"


ogType = "article";
ogImgUrl = {{.Site.BaseURL}}{{Site.Params.logoUrlPng}}
---

