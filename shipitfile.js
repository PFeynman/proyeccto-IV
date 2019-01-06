module.exports = shipit => {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/var/apps/leaguestatic',
      repositoryUrl: 'https://github.com/PFeynman/proyecto-iv',
      key: '~/.ssh/deploy',
      keepReleases: '1',
    },
    staging: {
      servers: 'deploy@142.93.235.169',
    },
  })

  shipit.task('install', async () => {
    return shipit.remote('npm install --only=prod', {cwd: '/var/apps/leaguestatic/current'})
  })

  shipit.task('start', async () => {
    return shipit.remote('npm start', {cwd: '/var/apps/leaguestatic/current'})
  })

  shipit.task('initDB', async () => {
    return shipit.remote('mongoimport data/champions.json --db league-static -c champions && mongoimport data/items.json --db league-static -c items', {cwd: '/var/apps/leaguestatic/current'})
  })
}