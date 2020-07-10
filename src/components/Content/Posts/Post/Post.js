import React from 'react';
import s from "./Post.module.css"

function Post(props) {
    return (
        <div className={s.post}>
            <img alt='' src='https://www.vokrug.tv/pic/product/2/3/6/b/236b371949fb667bd000ef313c89f901.jpeg'/>
            {props.message}
        </div>
    );
}

export default Post;