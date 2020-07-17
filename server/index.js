const express = require('express');
const httpProxy = require('http-proxy');
const path = require('path');
const app = express();
const port = 3000;
const apiProxy = httpProxy.createProxyServer({ prependPath: false });

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(port, () => console.log(`Proxy server running on port ${port}!`));


app.get("/carousels/:id", function(req, res) {
  let { id } = req.params;
  console.log('preview endpoint hit with id: ', id);
  apiProxy.web(req, res, {target: `http://localhost:3003/${id}`});
});

apiProxy.on('error', (err) => {
  console.log('proxy error: ', err);
});

