## Despligue de la aplicación usando un contenedor de Docker

1. Debemos instalar Docker. El mejor tutorial para ello es [este](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
2. En el directorio de la aplicación creamos un archivo Dockerfile. [Documentación del Dockerfile](https://github.com/PFeynman/proyecto-iv/blob/master/doc/dockerfile.md)
3. En ocasiones será interesante añadir también un archivo .dockerignore que contenga qué archivos y/o directorios no hay que copiar al contenedor (en mi caso por ejemplo, el directorio node_modules)
4. Para crear el contenedor he usado la nueva funcionalidad de Heroku que permite crear contenedores desde un fichero "heroku.yml":

```
$ heroku update beta
$ heroku plugins:install @heroku-cli/plugin-manifest
$ heroku container:login
$ heroku manifest:create
$ heroku container:push web
$ heroku container:release web
```
