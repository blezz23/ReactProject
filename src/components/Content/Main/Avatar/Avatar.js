import React from 'react';
import s from "./Avatar.module.css"

const Avatar = (props) => {
    return (
        <div className={s.avatar}>
            <div>
                <img alt='' src={'https://www.garant.ru/files/9/5/1284159/kak-zaschitit-svoe-pravo-na-ohranu-izobrazheniya_300.jpg'} />
            </div>
            <div>
                Редактировать аватар
            </div>
        </div>
    );
};

export default Avatar;