import React from 'react';
import s from "./MyPost.module.css"

function MyPost() {
    return (
        <div className={s.myPost}>
            <div>
                <textarea>Текст сообщения</textarea>
                <button>Добавить пост</button>
                <button>Отложенный пост</button>
            </div>
        </div>
    );
}

export default MyPost;