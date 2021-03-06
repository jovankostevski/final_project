const UserModel = require('../../../pkg/users');
const Validator = require('../../../pkg/validator');
const bcrypt = require('bcryptjs');

const create = async (req, res) => {
    let v = await Validator.Validate(req.body, Validator.UserCreationSchema);
    if(!v) {
        console.log('validation error');
        return res.status(400).send('Bad request [invalid data]');
    }
    let u = await UserModel.GetOneByEmail(req.body.email);
    if (u != null) {
        console.log('user validation error');
        return res.status(400).send('Bad request [user exists]');
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    try {
        let out = await UserModel.Create(req.body);
        out.__v = null;
        out.password = null;
        return res.status(201).send(out);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getAll = async (req, res) => {
    try {
        let us = await UserModel.GetAll();
        return res.status(200).send(us);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getOne = async (req, res) => {
    try {
        let u = await UserModel.GetOne(req.params.id);
        if (!u) {
            return res.status(404).send('Not found');
        }
        return res.status(200).send(u);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const update = async (req, res) => {
    try {
        await UserModel.Update(req.params.id, req.body);
        return res.status(204).send('No content');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const remove = async (req, res) => {
    try {
        await UserModel.Remove(req.params.id);
        return res.status(204).send('No content');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    remove
};