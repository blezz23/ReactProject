import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {
    followedActionCreator,
    setCurrentPageActionCreator,
    setFriendsActionCreator, totalUsersCountActionCreator,
    unfollowedActionCreator
} from "../../../Redux/friends-reducer";

let mapStateToProps = (props) => {
    return {
        friendsData: props.friendsPage.friendsData,
        pageSize: props.friendsPage.pageSize,
        totalUsersCount: props.friendsPage.totalUsersCount,
        currentPage: props.friendsPage.currentPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followedActionCreator(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowedActionCreator(userID));
        },
        setFriends: (friends) => {
            dispatch(setFriendsActionCreator(friends));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(totalUsersCountActionCreator(totalCount));
        }
    }
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;