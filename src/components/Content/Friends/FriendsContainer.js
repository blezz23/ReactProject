import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    followedActionCreator,
    setCurrentPageActionCreator,
    setFriendsActionCreator, totalUsersCountActionCreator,
    unfollowedActionCreator
} from "../../../Redux/friends-reducer";
import * as axios from "axios";

class FriendsContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&friend=${this.props.friend}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
            });
    };

    render() {
        return <Friends
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            friendsData={this.props.friendsData}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow} />
    }
}

let mapStateToProps = (props) => {
    return {
        friendsData: props.friendsPage.friendsData,
        pageSize: props.friendsPage.pageSize,
        totalUsersCount: props.friendsPage.totalUsersCount,
        currentPage: props.friendsPage.currentPage,
        friend: props.friendsPage.friend
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

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);

