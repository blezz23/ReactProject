import {authMeAPI} from "../../API/API";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};

const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});

export const authMe = () => async (dispatch) => {
    let response = await authMeAPI.authMe();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authMeAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
};

export const loginOut = () => async (dispatch) => {
    let response = await authMeAPI.loginOut();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export default authReducer;