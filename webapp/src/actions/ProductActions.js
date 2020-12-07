import axios from 'axios';

export const ProductCreateRequest = (data) => {
    return dispatch => {
        axios ({
            url: "/api/v1/products",
            method: 'POST',
            data: data
        })
        .then(data => dispatch({
            type: CREATE_PRODUCT,
            payload: data
        }))
        .catch(err => console.log(err));
    };
};

export const ProductsGetRequest = () => {
    return dispatch => {
        axios ({
            url: "/api/v1/products",
            method: 'GET'
        })
        .then(data => dispatch({
            type: GET_PRODUCTS,
            payload: data
        }))
        .catch(err => console.log(err));
    };
};

export const ProductDeleteRequest = (id) => {
    return dispatch => {
        axios ({
            url: `/api/v1/products/${id}`,
            method: 'DELETE'
        })
        .then(data => dispatch({
            type: DELETE_PRODUCT,
            payload: data
        }))
        .catch(err => console.log(err));
    };
};