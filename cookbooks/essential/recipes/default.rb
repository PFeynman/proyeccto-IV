# DOC: https://docs.chef.io/

# Creo el usuario de la aplicación
user 'leaguestatic' do
    comment 'Usuario para la aplicación league-static'
    home '/leaguestatic'
    shell '/bin/bash'
    password '$1$TzdtzbYg$X1HFsOnWDMwAMCfYIABQG1'
end

# Creo el directorio donde se alojará la aplicación
directory '/leaguestatic' do
    owner 'leaguestatic'
    group 'leaguestatic'
    mode '0755'
end

# Para la instalación de MongoDB
## Añadir repositorio
execute 'mongodb-key' do
    command 'apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4'
end

## Crear fichero .list
execute 'mongodb-list-file' do
    command 'echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list'
end

# Para la instalación de Nodejs
## Añadir repositorio para instalar Node
execute 'node-script' do
    command 'curl -sL https://deb.nodesource.com/setup_8.x | bash -'
end

# Actualizar los repositorios de APT
apt_update 'update' do
    action :update
end

# Instalar Git
package 'git'

# Instalar Node (y npm)
package 'nodejs'

# Instalar MongoDB
package 'mongodb-org'

# Inciar el servicio de Mongo
service 'mongodb' do
    service_name 'mongod'
    supports :status => true, :restart => true
    action [:enable, :start]
end

# Clonar repositorio
git 'leagestatic' do
    repository 'https://github.com/PFeynman/proyecto-iv'
    user 'leaguestatic'
    group 'leaguestatic'
    destination '/leaguestatic'
    action :checkout
end

# Instalar paquetes de la aplicación
execute 'install-packages' do
    command 'npm install'
    cwd '/leaguestatic'
end