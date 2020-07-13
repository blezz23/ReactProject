import React from 'react';
import s from "./Friends.module.css"
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsList = props.state.friendsData.map(f => <Friend name={f.name} id={f.id} avatar={f.avatar} />);

    return (
        <div className={s.friends}>
            {friendsList}
        </div>
    );
};

export default Friends;