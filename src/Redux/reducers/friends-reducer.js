import {followAPI, usersAPI} from "../../API/API";
import {updateObjectInArray} from "../../Utilities/object-helpers";

const FOLLOW = 'friends/FOLLOW';
const UNFOLLOW = 'friends/UNFOLLOW';
const SET_FRIENDS = 'friends/SET_FRIENDS';
const SET_CURRENT_PAGE = 'friends/SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'friends/TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'friends/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'friends/TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
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
                friendsData:
                    updateObjectInArray(state.friendsData, action.userID, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                friendsData:
                    updateObjectInArray(state.friendsData, action.userID, "id", {followed: false})
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

export const getFriends = (currentPage, pageSize, isFriend) => async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    let response = await usersAPI.getFriends(currentPage, pageSize, isFriend);

    dispatch(setToggleIsFetching(false));
    dispatch(setFriends(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount))
};

export const getUsers = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    let response = await usersAPI.getUsers(pageNumber, pageSize);

    dispatch(setToggleIsFetching(false));
    dispatch(setFriends(response.data.items))
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(followingInProgress(true, id));
    let response = await apiMethod(id);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(followingInProgress(false, id));
};

export const follow = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, id, followAPI.follow.bind(followAPI), acceptFollow)
};

export const unfollow = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, id, followAPI.unfollow.bind(followAPI), acceptUnfollow)
};

export default friendsReducer;