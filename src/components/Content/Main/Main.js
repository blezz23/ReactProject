import React from 'react';
import s from "./Main.module.css"
import Avatar from "./Avatar/Avatar";
import Posts from "./Posts/Posts";
import MyPost from "./Posts/MyPost/MyPost";

const Main = (props) => {
    return (
        <div className={s.content}>
            <Avatar />
            <MyPost
                newPostText={props.state.newPostText}
                dispatch={props.dispatch} />
            <Posts posts={props.state.postsData} />
        </div>
    );
};

export default Main;