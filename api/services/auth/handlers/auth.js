const UserModel = require('../../../pkg/users');
const Validator = require('../../../pkg/validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../../pkg/config');

const login = (req, res) => {
    let v = await Validator.Validate(req.body, Validator.UserLoginSchema);
    if (!v) {
        console.log('validation error');
        return res.status(400).send('Bad request [invalid data]');
    }
    let user = await UserModel.GetOneByEmail(req.body.email);
    if (user) {
        let pwd = bcrypt.compareSync(req.body.password, user.password);
        if (!pwd) {
            console.log('User not found');
            res.status(403).send('Forbidden');
        } else {
            console.log('User successfully logged in');
            let token_payload = {
                id: user._id,
                email: user.email,
                exp: new Date().getTime() / 1000 + config.Get('server').session_length
            };
            let token = jwt.sign(token_payload, config.Get('server').jwt_key);
            res.status(200).send({ jwt: token });
        }
    } else {
        console.log('User not found');
        res.status(404).send('Not found');
    }
};

const refreshToken = (req, res) => {
    let token_payload = {
        id: req.user.id,
        email: req.user.email,
        exp: new Date().getTime() / 1000 + config.Get('server').session_length
    };
    let token = jwt.sign(token_payload, config.Get('server').jwt_key);
    res.status(200).send({ jwt: token });
};

const logout = (req, res) => {
    res.status(201).send('ok');
};

module.exports = {
    login,
    refreshToken,
    logout
};