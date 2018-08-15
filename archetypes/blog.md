---
title: "{{ replace .TranslationBaseName "-" " " | title }}"

description: "breve descripcion del articulo"

categories:
- ej:salud

tags:
- ej:perros
- ej:gatos
- ej:prevencion
- etc

author: "Nombre del author"
authorLink: "ej:https://twitter.com/usuarioDelAuthor"

date: {{ .Date }}


img: "/images/example.jpg"
imgAlternativeText: "Texto alternativo para la imagen"
imgOriginalSource:"pexels"
imgOriginalSourceUrl:"https://pexels.com"
imgAuthor: "Nombre del autor de la imagen" 
imgAuthorUrl:"https://www.pexels.com/perfilDelAuthor"

destacado: false

draft: false

---

texto del articulo