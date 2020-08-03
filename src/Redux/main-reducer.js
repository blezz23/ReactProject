import {profileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET_STATUS';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    postsData: [],
    userProfile: null,
    newPostText: '',
    status: '',
    isFetching: true
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newTextPost
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

export const addPostActionCreator = () => ({type: ADD_POST});
export const newPostTextActionCreator = (body) => ({type: UPDATE_NEW_POST_TEXT, newTextPost: body});
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserId = (userId) => {
    return dispatch => {
        dispatch(setToggleIsFetching(true));
        profileAPI.getUserId(userId)
            .then(data => {
                dispatch(setToggleIsFetching(false));
                dispatch(setUserProfile(data))
            });
    }
};

export const getStatus = (userId) => {
    return dispatch => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
};

export const updateStatus = (statusText) => {
    return dispatch => {
        profileAPI.updateStatus(statusText)
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(statusText))
            }
        })
    }
};

export default mainReducer;