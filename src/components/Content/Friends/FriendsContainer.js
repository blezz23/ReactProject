import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';
import Preloader from '../../common/Preloader/Preloader';
import {
    getFriends, getUsers, unfollow, follow
} from "../../../Redux/friends-reducer";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize, this.props.isFriend);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                followingProgressArray={this.props.followingProgressArray}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
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
    getFriends, getUsers, unfollow, follow})(FriendsContainer);

