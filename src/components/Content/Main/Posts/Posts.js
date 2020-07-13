import React from 'react';
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} />);

    return (<div className={s.posts}>
            {postsElements}
        </div>
    );
};

export default Posts;