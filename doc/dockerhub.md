## Despligue de la aplicación usando un contenedor de Docker

[DockerHub](https://hub.docker.com/) es un repositorio en el que compartir imágenes de contenedores con nuestro equipo o la comunidad. 

Lo primero que debemos hacer es registrarnos en la web de DockerHub. 

Una vez dentro vamos a "Settings" > "Linked Accounts & Services" > "Github"

Para añadir una nueva imagen desde un repositorio pinchamos en "Create", seleccionar "Create automated build" > "Create Auto-build Github". Seleccionamos el repositorio del que queremos que se genere la imagen, indicamos el nombre, la visibilidad y una descripción y hacemos click en crear. 

Es necesario que nuestro repositorio cuente con un archivo Dockerfile. 

En cuanto hagamos push a nuestro repositorio, nuestra imagen podrá ser descargada con el comando ```docker pull <usuario/imagen>```.
