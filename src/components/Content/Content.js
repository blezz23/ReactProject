import React from 'react';
import s from "./Content.module.css"
import Avatar from "./Avatar/Avatar";
import Posts from "./Posts/Posts";
import MyPost from "./Posts/MyPost/MyPost";

function Content() {
    return (
        <div className={s.content}>
            <Avatar />
            <MyPost />
            <Posts />
        </div>
    );
}

export default Content;