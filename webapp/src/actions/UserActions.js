import axios from 'axios';

export const UserLoginRequest = (data) => {
    return dispatch => {
        axios ({
            url: "/api/v1/auth/login",
            method: 'POST',
            data: data
        })
        .then(data => dispatch({
            type: USER_LOGIN,
            payload: data
        }))
        .catch(err => console.log(err));
    };
};

export const UserCreateRequest = (data) => {
    return dispatch => {
        axios ({
            url: "/api/v1/user/create",
            method: 'POST',
            data: data
        })
        .then(data => dispatch({
            type: CREATE_USER,
            payload: data
        }))
        .catch(err => console.log(err));
    };
};