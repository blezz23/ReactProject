import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';
import Preloader from '../../common/Preloader/Preloader';
import {getUsers, unfollow, follow, getFriends} from "../../../Redux/reducers/friends-reducer";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getFollowingProgressArray, getCurrentPage, getPageSize,
    getTotalUsersCount, getIsFetching, getIsFriend, getFriendsSuperSelector
} from "../../../Redux/selectors/users-selector";

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

let mapStateToProps = (state) => {
    return {
        friendsData: getFriendsSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFriend: getIsFriend(state),
        isFetching: getIsFetching(state),
        followingProgressArray: getFollowingProgressArray(state),
    }
};

export default compose(
    connect(mapStateToProps, {getFriends, getUsers, unfollow, follow}),
    withAuthRedirect
)(FriendsContainer);

