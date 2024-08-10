const { createProxyMiddleware } = require('http-proxy-middleware');

const target = 'https://v6.exchangerate-api.com/v6/fad7770f12da02b1e6899328';
const changeOrigin = true; // Allow origin change (necessary for CORS)
const proxy = createProxyMiddleware({
  target,
  changeOrigin,
  pathRewrite: { '^/api': '' }, // Remove the proxy prefix
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'; // Allow requests from any origin
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type'; // Allow specific headers
  },
});

module.exports = proxy;