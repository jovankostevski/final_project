const proxy = require('express-http-proxy');
const express = require('express');
const config = require('../../pkg/config');
const cors = require('cors');

const api = express();

api.use('*', cors({ origin: '*' }));

api.use('/api/v1/users', proxy(
    'http://localhost:10001', 
    { proxyReqPathResolver: () => 'http://localhost:10001/api/v1/users' }
));
api.use('/api/v1/auth', proxy(
    'http://localhost:10002', 
    { proxyReqPathResolver: () => 'http://localhost:10002/api/v1/auth' }
));
api.use('/api/v1/products', proxy(
    'http://localhost:10003', 
    { proxyReqPathResolver: () => 'http://localhost:10003/api/v1/products' }
));

api.use('/', proxy('localhost:3000'));

api.listen(config.Get('services').proxy.port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`Server started on port ${config.Get('services').proxy.port}`);
});