module.exports = {
  apps : [{
    name: "server",
    script: 'ts-node  --transpile-only ./src/app.ts',
    watch: ['src','.env'],
    watch_delay: 1000,
    ignore_watch : ["node_modules"],
  }],
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
