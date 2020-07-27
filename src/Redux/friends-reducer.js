const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET_FRIENDS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    friendsData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFriend: false,
    isFetching: true
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
        default:
            return state;
    }
};

export const followedActionCreator = (userID) => ({type: FOLLOW, userID});
export const unfollowedActionCreator = (userID) => ({type: UNFOLLOW, userID});
export const setFriendsActionCreator = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const totalUsersCountActionCreator = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default friendsReducer;