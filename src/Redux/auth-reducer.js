import {authMeAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export const authMe = () => {
    return dispatch => {
        authMeAPI.authMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            }
        )
    }
};

export default authReducer;