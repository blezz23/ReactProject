import {profileAPI} from "../../API/API";

const ADD_POST = 'main/ADD_POST';
const DELETE_POST = 'main/DELETE_POST';
const SET_STATUS = 'main/SET_STATUS';
const SET_USER_PROFILE = 'main/SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'main/TOGGLE_IS_FETCHING';

let initialState = {
    postsData: [
        {id: 1, message: 'Lol'},
        {id: 2, message: 'ne lol'},
        {id: 3, message: 'samurai!!!'}],
    userProfile: null,
    status: '',
    isFetching: true
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let body = action.newPostText;
            return {
                ...state,
                postsData: [...state.postsData, {id: 4, message: body}]
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostAC = (postId) => ({type: DELETE_POST, postId});
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserId = (userId) => async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    let response = await profileAPI.getUserId(userId);
    dispatch(setToggleIsFetching(false));
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};

export const updateStatus = (statusText) => async (dispatch) => {
    let response = await profileAPI.updateStatus(statusText);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(statusText))
    }
};

export default mainReducer;