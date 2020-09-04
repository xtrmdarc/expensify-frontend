const { createProxyMiddleware } = require('http-proxy-middleware');
/* eslint-disable */
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      // target: 'https://xtrmdarc-expensify.herokuapp.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
};

/* eslint-enable */
