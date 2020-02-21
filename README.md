# Patikscol

Sitio web dedicado a fomentar la adopccion animal. Construido con el generador de sitios staticos **[Hugo](https://gohugo.io/)**,
hosting en **Netlify** y la gestion de contenidos con el **Netlify CMS**.

Responsive Website dedicated to encourage animal adoption. Built using the static site generator **[Hugo](https://gohugo.io/)**,
hosted on **[Netlify](https://www.netlify.com/)**

## Features
- **[Gulp](https://gulpjs.com/)** for task management 
- **[SASS](https://sass-lang.com/)** with **[SMACSS](https://smacss.com/)** architecture for styling
- **[HUGO](https://gohugo.io/)** for site generation


## Site's structure
the two main folder
- `layouts` : Contains templates for articles and pets profiles:
  
  - `layouts/partials`: reusable elements like header, footer, pet-card and article-card
  - `layouts/blog`: blog template
  - `layouts/pets`: pets template
  - `layouts/categories`, `layouts/tags`: categories and tags templates
  
- `src`:

  - `src/sass/`: all styles implementing [SMACSS](https://smacss.com/) architecture 
  
    - `config`: variables, mixings, etc
    - `libraries`: normalize, pesticide, etc
    - `base`: basic elements
    - `layout`: containers for views
    - `modules`: reusable elements cards, share-buttons, etc
    - `state`: on event styles

