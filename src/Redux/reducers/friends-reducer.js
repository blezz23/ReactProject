import {followAPI, usersAPI} from "../../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    friendsData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFriend: false,
    isFetching: true,
    followingProgressArray: []
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friendsData: state.friendsData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                friendsData: state.friendsData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_FRIENDS:
            return {
                ...state,
                friendsData: action.friends
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgressArray: action.progressFollow
                    ? [...state.followingProgressArray, action.userId]
                    : state.followingProgressArray.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

const acceptFollow = (userID) => ({type: FOLLOW, userID});
const acceptUnfollow = (userID) => ({type: UNFOLLOW, userID});
const setFriends = (friends) => ({type: SET_FRIENDS, friends});
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount});
const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const followingInProgress = (progressFollow, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, progressFollow, userId});


export const getFriends = (currentPage, pageSize, isFriend) => {
    return dispatch => {
        dispatch(setToggleIsFetching(true));
        usersAPI.getFriends(currentPage, pageSize, isFriend)
            .then(data => {
                dispatch(setToggleIsFetching(false));
                dispatch(setFriends(data.items));
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
};

export const getUsers = (pageNumber, pageSize) => {
    return dispatch => {
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setToggleIsFetching(false));
                dispatch(setFriends(data.items))
        });
    }
};

export const follow = (id) => {
    return dispatch => {
        dispatch(followingInProgress(true, id));
        followAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptFollow(id))
                }
                dispatch(followingInProgress(false, id));
            });
    }
};

export const unfollow = (id) => {
    return dispatch => {
        dispatch(followingInProgress(true, id));
        followAPI.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptUnfollow(id))
                }
                dispatch(followingInProgress(false, id));
            });
    }
};

export default friendsReducer;