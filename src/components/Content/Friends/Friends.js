import React from 'react';
import {Paginator} from "../../common/Paginator/Paginator";
import Friend from "./Friend";

const Friends = (props) => {
    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}/>
            <div>
                {
                    props.friendsData.map(f => <Friend
                        friend={f}
                        followingProgressArray={props.followingProgressArray}
                        follow={props.follow}
                        unfollow={props.unfollow}/>
                    )
                }
            </div>
        </div>
    )
};

export default Friends;