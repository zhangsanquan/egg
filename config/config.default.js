/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1583457927381_6627';

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhileList: ['http: //www.91.com']  //允许跨域的白名单
  };

  config.cors = {
    //origin: '* //允许所有跨域不安全，所以配置上面的白名单
      allowMethods: 'GET, POST, DELETE'
  }

  // add your middleware config here
  config.middleware = ['params'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
