export const getFriendsSelector = (state) => {
    return state.friendsPage.friendsData;
};

export const getPageSize = (state) => {
    return state.friendsPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.friendsPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage;
};

export const getIsFriend = (state) => {
    return state.friendsPage.isFriend;
};

export const getIsFetching = (state) => {
    return state.friendsPage.isFetching;
};

export const getFollowingProgressArray = (state) => {
    return state.friendsPage.followingProgressArray;
};