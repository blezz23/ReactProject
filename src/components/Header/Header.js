import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <img alt='' src='https://s1.logaster.com/static/v3/img/products/logo.png'/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    );
};

export default Header;