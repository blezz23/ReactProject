const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET_FRIENDS";

let initialState = {
    friendsData: []
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
                    if(u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_FRIENDS:
            return {
                ...state,
                friendsData: [...state.friendsData, ...action.friends]
            };
        default:
            return state;
    }
};

export const followedActionCreator = (userID) => ({type: FOLLOW, userID});
export const unfollowedActionCreator = (userID) => ({type: UNFOLLOW, userID});
export const setFriendsActionCreator = (friends) => ({type: SET_FRIENDS, friends});


export default friendsReducer;