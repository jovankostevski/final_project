require('../../pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const config = require('../../pkg/config');
const Products = require('./handlers/products');

const api = express();

api.use(bodyParser.json());

api.post('/api/v1/products', Products.create);
api.get('/api/v1/products', Products.getAll);
api.get('/api/v1/products/:id', Products.getOne);
api.put('/api/v1/products/:id', Products.update);
api.delete('/api/v1/products/:id', Products.remove);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad token...');
    }
});

api.listen(config.Get('services').prducts.port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`Server started on port ${config.Get('services').prducts.port}`);
});