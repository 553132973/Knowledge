const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://39.104.25.232:3001",
      changeOrigin: true,
    })
  );
};
