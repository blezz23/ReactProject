import React from 'react';
import s from "./Posts.module.css"
import Post from "./Post/Post";

const postsData = [
    {id: 1, message: 'lol'},
    {id: 2, message: 'ne lol'},
    {id: 3, message: 'da ne'}
];

const Posts = (props) => {
    return (<div className={s.posts}>
            <Post message={postsData[0].message} />
            <Post message={postsData[1].message} />
            <Post message={postsData[2].message} />
        </div>
    );
};

export default Posts;