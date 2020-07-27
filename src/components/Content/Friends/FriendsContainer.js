import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import Friends from './Friends';
import Preloader from "../../common/Preloader/Preloader";
import {
    followedActionCreator,
    setCurrentPageActionCreator,
    setFriendsActionCreator, toggleIsFetchingAC, totalUsersCountActionCreator,
    unfollowedActionCreator
} from '../../../Redux/friends-reducer';

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&friend=${this.props.isFriend}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setFriends(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setFriends(response.data.items)
            });
    };

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader /> : null}
            <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                friendsData={this.props.friendsData}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>
        </>
    }
}

let mapStateToProps = (props) => {
    return {
        friendsData: props.friendsPage.friendsData,
        pageSize: props.friendsPage.pageSize,
        totalUsersCount: props.friendsPage.totalUsersCount,
        currentPage: props.friendsPage.currentPage,
        isFriend: props.friendsPage.isFriend,
        isFetching: props.friendsPage.isFetching
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
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);

