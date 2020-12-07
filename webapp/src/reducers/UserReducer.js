const { USER_LOGIN, CREATE_USER } = require("../actions/UserActions");

const initialState = {
    user: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return [...state, action.payload];
        case CREATE_USER:
            return [...state, action.payload];
        default: return state;
    }
}

export default UserReducer;