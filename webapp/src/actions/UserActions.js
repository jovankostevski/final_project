import axios from 'axios';

export const UserLoginRequest = (data) => {
    return dispatch => {
        axios ({
            url: "/api/v1/auth/login",
            method: 'POST'
        })
        .then(res => {dispatch(UserLoginSuccess(res.data))})
        .catch(err => {dispatch(UserLoginFail(err))})
    }
}

export const UserLoginSuccess = (data) => {
    return{
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

export const UserLoginFail = (err) => {
    return{
        type: "LOGIN_FAIL",
        payload: err
    }
}