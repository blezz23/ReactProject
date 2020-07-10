import React from 'react';
import s from "./Nav.module.css";

function Nav() {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <a href='../../index.js'>Мой профиль</a>
            </div>
            <div>
                <a href='../../index.js'>Друзья</a>
            </div>
            <div>
                <a href='../../index.js'>Сообщения</a>
            </div>
            <div>
                <a href='../../index.js'>Новости</a>
            </div>
            <div>
                <a href='../../index.js'>Настройки</a>
            </div>
        </div>
    );
}

export default Nav;