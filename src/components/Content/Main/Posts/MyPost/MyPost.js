import React from 'react';
import s from "./MyPost.module.css"

const MyPost = (props) => {
    let textPost = React.createRef();
    let addPost = () => {
        let text = textPost.current.value;
        props.addPost(text);
        textPost.current.value = '';
    };

    return (
        <div className={s.myPost}>
            <div>
                <textarea ref={textPost}></textarea>
                <button onClick={addPost}>Добавить пост</button>
                <button>Отложенный пост</button>
            </div>
        </div>
    );
};

export default MyPost;