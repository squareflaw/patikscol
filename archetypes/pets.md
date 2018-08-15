---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}

description: "descripcion corta de la mascota para compartir en redes sociales"

name: "{{ replace .TranslationBaseName "-" " " | title }}"
age: "edad de la mascota ej: 5 meses"
img: "/images/{{.TranslationBaseName}}.jpg"

location: "Cabimas - Zulia"
phone: "telefono de contacto ej: +58 424-6139173"
draft: false

---

descripcion de la mascota(emoticons estan permitidos)