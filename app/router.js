'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.news);

  router.get('/user', controller.user.info);
  router.post('/user/:id', controller.user.update);
  router.delete('/user/:id', controller.user.remove);

};
