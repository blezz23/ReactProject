import React from 'react';
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='/main'>Мой профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends'>Друзья</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Настройки</NavLink>
            </div>
        </div>
    );
};

export default Nav;