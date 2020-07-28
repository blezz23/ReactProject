import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    let contactsObj = {};

    for (let cont in props.profileInfo?.contacts) {
        if (props.profileInfo?.contacts[cont]) {
            contactsObj[cont] = props.profileInfo?.contacts[cont];
        }
    }
    let contactsArray = Object.values(contactsObj);

    return (
        <div className={s.profile}>
            <div className={s.fullName}>{props.profileInfo?.fullName}</div>
            <div className={s.about}>Статус: {props.profileInfo?.aboutMe}</div>
            <div className={s.contacts}>Мои сайты: {contactsArray.join(', ')}</div>
        </div>
    )
};

export default ProfileInfo;