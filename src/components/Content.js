import React from 'react';
import s from "./Content.module.css"

function Content() {
    return (
        <div className={s.content}>
            <div className={s.item}>
                Новый пост
                <div>
                    Отправить
                </div>
            </div>
            <div>
                Мои посты
            </div>
        </div>
    );
}

export default Content;