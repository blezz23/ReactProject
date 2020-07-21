import React from 'react';
import s from "./MyPost.module.css"
import {addPostActionCreator, newPostTextActionCreator} from "../../../../../Redux/main-reducer";

const MyPost = (props) => {
    let newPostBody = props.newPostText;
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = (e) => {
        let body = e.target.value;
        props.dispatch(newPostTextActionCreator(body));
    };

    return (
        <div className={s.myPost}>
            <div>
                <textarea placeholder="Введите сообщение" onChange={onPostChange} value={newPostBody}/>
                <button onClick={addPost}>Добавить пост</button>
                <button>Отложенный пост</button>
            </div>
        </div>
    );
};

export default MyPost;