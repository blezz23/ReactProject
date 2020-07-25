import React from 'react';
import s from "./Main.module.css"
import Avatar from "./Avatar/Avatar";
import PostsContainer from "./Posts/PostsContainer";
import MyPostContainer from "./Posts/MyPost/MyPostContainer";

const Main = (props) => {
    return (
        <div className={s.content}>
            <Avatar />
            <MyPostContainer />
            <PostsContainer />
        </div>
    );
};

export default Main;