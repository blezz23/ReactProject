import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {followedActionCreator, setFriendsActionCreator, unfollowedActionCreator} from "../../../Redux/friends-reducer";

let mapStateToProps = (props) => {
    return {
        friendsData: props.friendsPage.friendsData
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
        }
    }
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;