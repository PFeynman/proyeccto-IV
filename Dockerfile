# Definir imagen desde la que vamos a construir.
FROM node:8

# Definir el directorio que va albergar la aplicación dentro de la imagen
WORKDIR /usr/src/app

# Copiar el archivo package.json al directorio de la aplicación para poder instalar las dependencias
COPY package.json ./

# Indicar el comando a ejecutar para instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto que utiliza la aplicación
EXPOSE 3000

# Indicar el comando a ejecutar para lanzar la aplicación
CMD ["npm", "start"]