// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/var/apps/leaguestatic',
      repositoryUrl: 'https://github.com/PFeynman/proyecto-iv',
      key: '~/.ssh/id_rsa',
      keepReleases: '1',
    },
    staging: {
      servers: 'deploy@188.166.4.48',
    },
  })

  shipit.task('install', async () => {
    return shipit.remote('npm install --only=prod', {cwd: '/var/apps/leaguestatic/current'})
  })

  shipit.task('start', async () => {
    return shipit.remote('npm start', {cwd: '/var/apps/leaguestatic/current'})
  })
}