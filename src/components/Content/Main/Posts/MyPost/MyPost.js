import React from 'react';
import s from "./MyPost.module.css"
import {addPostActionCreator, newPostTextActionCreator} from "../../../../../Redux/Store";

const MyPost = (props) => {
    let textPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = textPost.current.value;
        props.dispatch(newPostTextActionCreator(text));
    };

    return (
        <div className={s.myPost}>
            <div>
                <textarea onChange={onPostChange} ref={textPost} value={props.newPostText}/>
                <button onClick={addPost}>Добавить пост</button>
                <button>Отложенный пост</button>
            </div>
        </div>
    );
};

export default MyPost;