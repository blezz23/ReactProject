import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

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
            {props.profileInfo?.userId !== 9569
            ? <div className={s.about}>Статус: {props.status}</div>
            : <ProfileStatus
                    updateStatus={props.updateStatus}
                    status={props.status} />}
            <div className={s.contacts}>Мои сайты: {contactsArray.join(', ')}</div>
        </div>
    )
};

export default ProfileInfo;