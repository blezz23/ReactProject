import React from 'react';
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {
    return (<div className={s.posts}>
            <Post message="lol"/>
            <Post message="ne lol"/>
        </div>
    );
};

export default Posts;