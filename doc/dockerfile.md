## Fichero Dockerfile

Un fichero Dockerfile es aquel que Docker puede utilizar para crear una nueva imagen con los parámetros que definamos. 

Lo primero es definir una imagen "base" desde la que partir. Esto se indica mediante la instrucción ```FROM```. Como en mi aplicación utilizo NodeJS 8, los argumentos para esta instrucción son ```ǹode:8```

Una vez tenemos un contenedor con Node, indico cuál va a ser el directorio que debe albergar la aplicación con la instrucción ```WORKDIR```.

Para instalar todos los paquetes que necesita la aplicación, copio el archivo package.json a dicho directorio con la instrucción ```COPY``` e indico al contenedor que ejecute ```npm install``` en la instrucción ```RUN```

Ahora copio el resto del código fuente (excepto los archivos indicados en .dockerignore) usando de nuevo la instrucción ```COPY```

Expongo el puerto que utiliza la aplicación con ```EXPOSE```

Y por último indico el comando que debe ejecutar para correr la aplicación con la instrucción ```CMD["orden", "parámetro1"[, "parámetro2"]]```