const ProductModel = require('../../../pkg/products');
const Validator = require('../../../pkg/validator');

const create = async (req, res) => {
    let v = await Validator.Validate(req.body, Validator.ProductCreationSchema);
    if(!v) {
        console.log('validation error');
        return res.status(400).send('Bad request [invalid data]');
    }
    try {
        let out = await ProductModel.Create(req.body);
        return res.status(201).send(out);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getAll = async (req, res) => {
    try {
        let ps = await ProductModel.GetAll();
        return res.status(200).send(ps);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getOne = async (req, res) => {
    try {
        let p = await ProductModel.GetOne(req.params.id);
        if (!p) {
            return res.status(404).send('Not found');
        }
        return res.status(200).send(p);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const update = async (req, res) => {
    try {
        await ProductModel.Update(req.params.id, req.body);
        return res.status(204).send('No content');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const remove = async (req, res) => {
    try {
        await ProductModel.Remove(req.params.id);
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