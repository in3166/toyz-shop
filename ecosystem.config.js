module.exports = {
  apps: [
    {
      name: 'Toyz_Next',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'node_modules/next/dist/bin/next',
      args: 'run start',
      watch: false,
      ignore_watch: ['node_modules'],
      cwd: '/home/ubuntu/github_action/',
      out_file: '/home/ubuntu/github_action/hooker.out.log',
      err_file: '/home/ubuntu/github_action/hooker.err.log',
      env_local: {
        APP_ENV: 'local', // APP_ENV=local
      },
      env_development: {
        APP_ENV: 'dev', // APP_ENV=dev
      },
      env_production: {
        APP_ENV: 'prod', // APP_ENV=prod
      },
    },
  ],
}
