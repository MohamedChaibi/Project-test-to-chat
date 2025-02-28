// Import action types
import {  CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SUCC_USER } from "../ActionTypes/user";

// Initial state
const iniState = {
    user: null, // Changed from {} to null
    loadUser: false,
    errors: null, // Changed from [] to null
    isAuth: false,
};

// Pure function reducer
const userReducer = (state = iniState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, loadUser: true };
        case SUCC_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, loadUser: false, user: payload.user, isAuth: true };
        case CURRENT_USER:
            return { ...state, user: payload, loadUser: false, isAuth: true };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { user: null, loadUser: false, errors: null, isAuth: false };
        case FAIL_USER:
            return { ...state, loadUser: false, errors: payload };

        default:
            return state;
    }
};

// Export
export default userReducer;
