module.exports = shipit => {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    // Variables para el despliegue
    default: {
      deployTo: '/var/apps/leaguestatic',
      repositoryUrl: 'https://github.com/PFeynman/proyecto-iv',
      key: '~/.ssh/deploy',
    },
    // Servidor de staging
    staging: {
      servers: 'deploy@142.93.235.169',
    },
    // Servidores de producción si los hubiera
  })

  // Tarea para instalar los paquetes requeridos por el servicio
  shipit.task('install', async () => {
    return shipit.remote('npm install --only=prod', {cwd: '/var/apps/leaguestatic/current'})
  })

  // Tarea para iniciar el servicio
  shipit.task('start', async () => {
    return shipit.remote('npm start', {cwd: '/var/apps/leaguestatic/current'})
  })

  // Tarea para insertar los datos en la base de datos
  shipit.task('initDB', async () => {
    return shipit.remote('mongoimport data/champions.json --db league-static -c champions && mongoimport data/items.json --db league-static -c items', {cwd: '/var/apps/leaguestatic/current'})
  })
}