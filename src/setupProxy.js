const { createProxyMiddleware } = require('http-proxy-middleware');
/* eslint-disable */
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://xtrmdarc-expensify.herokuapp.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
};

/* eslint-enable */
