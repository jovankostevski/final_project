const { CREATE_PRODUCT, GET_PRODUCTS, DELETE_PRODUCT } = require("../actions/ProductActions");

const initialState = {
    product: []
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return [...state, action.payload];
        case GET_PRODUCTS:
            return [...state, action.payload];
        case DELETE_PRODUCT:
            return [...state, action.payload];    
        default: return state;
    }
}

export default ProductReducer;