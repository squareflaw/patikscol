# Patikscol

Sitio web dedicado a fomentar la adopccion animal. Construido con el generador de sitios staticos **HUGO**,
hosting en **Netlify** y la gestion de contenidos con el **Netlify CMS**.

## Elementos principales
- **[Gulp](https://gulpjs.com/)** para la ejecucion de tareas 
- **[SASS](https://sass-lang.com/)** con arquitectura **[SMACSS](https://smacss.com/)** para los estilos del sitio
- **[HUGO](https://gohugo.io/)** para la generacion del sitio

## Requerimientos 

- [NPM](https://nodejs.org/en/) (Viene por defecto junto con NodeJS)
- [HUGO](https://gohugo.io/getting-started/installing/)

## Probar el sitio de forma local

Para empezar se deben de instalar las dependencias con el comando
```
npm install
```
Ya teniendolas instaladas tenemos varios comandos en el archivo `package.json`. Los mas importantes son:

```
gulp server 
```
Para iniciar el servidor en **localhost:3000** con la visualizacion del sitio

```
gulp build 
```
Este es el comando que ejecutara **Netlify** para construir el sitio antes de hacer deploy


## Estructura del sitio
Las dos carpetas mas importantes son 
- `layouts` : la cual contiene las plantillas como articulos del blog y perfil de las mascotas. Dentro de ella tenemos:
  
  - `layouts/partials`: contiene todos los elementos reutilizables de la pagina como el header,footer,pet-card y article-card
  - `layouts/blog`: template del blog
  - `layouts/pets`: template del las mascotas
  - `layouts/categories`, `layouts/tags`: template para las categorias y etiquetas 
  
- `src`: aqui esta todo el codigo css y js de la pagina

  - `src/sass/`: contiene los estilos implementando la arquitectura [SMACSS](https://smacss.com/)
  
    - `config`: variables, mixings, etc
    - `libraries`: como normalize, pesticide, etc
    - `base`: Elementos basicos del sitio
    - `layout`: organizacion de los contenedores
    - `modules`: todos los elementos reutilizables del sitio como cards, share-buttons, etc
    - `state`: todos los estilos que dependen de eventos

## Colaboraciones
Si quieres colaborar sigue los pasos y una vez hayas terminado tu aporte puedes hacer un **PR**,
Netlify permite tener una preview de la pagina con tus cambios
