const { UserLoginSuccess } = require("../actions/UserActions");

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case UserLoginSuccess:
            return [...state, action.payload];
        default: return state;
    }
}

export default UserReducer;