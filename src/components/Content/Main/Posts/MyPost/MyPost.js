import React from 'react';
import s from "./MyPost.module.css"

const MyPost = (props) => {
    let newPostBody = props.state.newPostText;
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = (e) => {
        let body = e.target.value;
        props.postChange(body);
    };

    return (
        <div className={s.myPost}>
            <div>
                <textarea placeholder="Введите сообщение" onChange={onPostChange} value={newPostBody}/>
                <button onClick={onAddPost}>Добавить пост</button>
                <button>Отложенный пост</button>
            </div>
        </div>
    );
};

export default MyPost;