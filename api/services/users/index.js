require('../../pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const config = require('../../pkg/config');
const Users = require('./handlers/users');

const api = express();

api.use(cors());
api.use(bodyParser.json());
api.use(jwt({
    secret: config.Get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: '/api/v1/users', methods: ['POST'] }
    ]
})
);

api.post('/api/v1/users', Users.create);
api.get('/api/v1/users', Users.getAll);
api.get('/api/v1/users/:id', Users.getOne);
api.put('/api/v1/users/:id', Users.update);
api.delete('/api/v1/users/:id', Users.remove);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad token...');
    }
});

api.listen(config.Get('services').users.port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`Server started on port ${config.Get('services').users.port}`);
});