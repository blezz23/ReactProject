import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const ADD_STATUS = 'ADD_STATUS';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    postsData: [],
    userProfile: null,
    newPostText: '',
    myStatus: 'LOL',
    newStatusText: '',
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
        case ADD_STATUS:
            return {
                ...state,
                myStatus: state.newStatusText
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newTextPost
            };
        case UPDATE_NEW_STATUS_TEXT:
            return {
                ...state,
                newStatusText: action.newStatusText
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
export const updateStatusAC = () => ({type: ADD_STATUS});
export const newPostTextActionCreator = (body) => ({type: UPDATE_NEW_POST_TEXT, newTextPost: body});
export const newStatusTextAC = (newStatusText) => ({type: UPDATE_NEW_STATUS_TEXT, newStatusText});
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getUserId = (userID) => {
    return dispatch => {
        dispatch(setToggleIsFetching(true));
        let userId = userID;
        if (!userId) {
            userId = 9569;
        }
        usersAPI.getUserId(userId)
            .then(data => {
                dispatch(setToggleIsFetching(false));
                dispatch(setUserProfile(data))
            });
    }
};

export const updateStatus = (statusText) => {
    return dispatch => {
        profileAPI.updateStatus(statusText)
            .then(data => {
            if (data.resultCode === 0) {
                dispatch(updateStatusAC())
            }
        })
    }
};

export default mainReducer;