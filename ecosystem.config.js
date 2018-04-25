/* eslint-disable */
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    dev : {
      user : 'root',
      host : '172.16.32.159',
      ref  : 'origin/dev',
      repo : '', // 仓库地址
      path : '/root/dev', // 发布位置
      'post-deploy' : 'npm install && npm run build:dev'
    },
    test : {
      user : 'root',
      host : '172.16.32.159',
      ref  : 'origin/dev',
      repo : '',  // 仓库地址
      path : '/root/test',  // 发布位置
      'post-deploy' : 'npm install && npm run build:test'
    },
  }
};
