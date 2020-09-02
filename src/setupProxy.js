const { createProxyMiddleware } = require('http-proxy-middleware');
/* eslint-disable */
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'https://xtrmdarc-expensify.herokuapp.com/',
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
};

/* eslint-enable */
