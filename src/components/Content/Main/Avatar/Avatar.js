import React from 'react';
import s from "./Avatar.module.css"

const Avatar = (props) => {
    return (
        <div className={s.avatar}>
            <div>
                <img alt='' src={props.avatar?.photos.small} />
            </div>
            <div>
                Редактировать аватар
            </div>
        </div>
    );
};

export default Avatar;