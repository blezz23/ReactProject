import React from 'react';
import s from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={s.header}>
            <img alt='' src='https://s1.logaster.com/static/v3/img/products/logo.png'/>
        </div>
    );
};

export default Header;