require('../../pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const config = require('../../pkg/config')
const Auth = require('./handlers/auth');

const api = express();

api.use(bodyParser.json());
api.use(jwt({
        secret: config.Get('server').jwt_key,
        algorithms: ['HS256']
    }).unless({
        path: [
            { url: '/api/v1/auth/login', methods: ['POST'] }
        ]
    })
);

api.post('/api/v1/auth/login', Auth.login);
api.get('/api/v1/auth/refresh-token', Auth.refreshToken);
api.get('/api/v1/auth/logout', Auth.logout);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad token...');
    }
});

api.listen(config.Get('services').auth.port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`Server started on port ${config.Get('services').auth.port}`);
});