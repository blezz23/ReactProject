import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';
import Preloader from '../../common/Preloader/Preloader';
import {
    followed, followingInProgress,
    setCurrentPage,
    setFriends,
    setToggleIsFetching,
    setTotalUsersCount,
    unfollowed
} from "../../../Redux/friends-reducer";
import {usersAPI} from "../../../API/API";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getFriends(this.props.currentPage, this.props.pageSize, this.props.isFriend).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setFriends(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setFriends(data.items)
            });
    };

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                friendsData={this.props.friendsData}
                onPageChanged={this.onPageChanged}
                follow={this.props.followed}
                unfollow={this.props.unfollowed}
                followingInProgress={this.props.followingInProgress}
                followingProgressArray={this.props.followingProgressArray}
            />
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
        isFetching: props.friendsPage.isFetching,
        followingProgressArray: props.friendsPage.followingProgressArray
    }
};

export default connect(mapStateToProps, {
    followed, unfollowed, setFriends, setCurrentPage,
    setTotalUsersCount, setToggleIsFetching, followingInProgress})(FriendsContainer);

