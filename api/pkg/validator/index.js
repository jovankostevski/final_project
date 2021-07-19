const {Validator} = require('node-input-validator');

const UserCreationSchema = {
    first_name: 'required',
    last_name: 'required',
    email: 'required|email',
    date_of_birth: 'required',
    telephone: 'required',
    country: 'required',
    password: 'required'
};

const UserLoginSchema = {
    email: 'required|email',
    password: 'required'
};

const ProductCreationSchema = {
    product_name: 'required',
    product_description: 'required',
    product_type: 'required',
    purchase_date: 'required|dateFormat:DD-MM-YYYY',
    product_price: 'required'
}

const Validate = (data, schema) => {
    let v = new Validator(data, schema);
    return v.check();
};

module.exports = {
    UserCreationSchema,
    UserLoginSchema,
    ProductCreationSchema,
    Validate
};