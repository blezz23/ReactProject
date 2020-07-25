import Post from "./Post/Post";
import s from "./Posts.module.css";
import React from "react";

const Posts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message}/>);

    return (<div className={s.posts}>
            {postsElements}
        </div>
    )
};

export default Posts;