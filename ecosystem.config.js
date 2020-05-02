const { main, name } = require('./package');

module.exports = {
  apps: [
    {
      name,
      script: main,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
