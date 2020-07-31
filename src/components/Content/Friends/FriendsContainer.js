import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';
import Preloader from '../../common/Preloader/Preloader';
import {getFriends, getUsers, unfollow, follow} from "../../../Redux/friends-reducer";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {compose} from "redux";

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
        friendsData: state.friendsPage.friendsData,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFriend: state.friendsPage.isFriend,
        isFetching: state.friendsPage.isFetching,
        followingProgressArray: state.friendsPage.followingProgressArray,
    }
};

export default compose(
    connect(mapStateToProps, {getFriends, getUsers, unfollow, follow}),
    withAuthRedirect
)(FriendsContainer);

