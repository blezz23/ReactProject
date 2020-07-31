import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import {connect} from "react-redux";
import {newStatusTextAC, updateStatusAC} from "../../../../Redux/main-reducer";

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
            ? <div className={s.about}>Статус: {props.profileInfo?.aboutMe}</div>
            : <ProfileStatus
                    statusChange={props.statusChange}
                    addStatus={props.addStatus}
                    myStatus={props.myStatus}
                    newStatusText={props.newStatusText}/>}
            <div className={s.contacts}>Мои сайты: {contactsArray.join(', ')}</div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        newStatusText: state.mainPage.newStatusText,
        myStatus: state.mainPage.myStatus
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addStatus: () => {
            dispatch(updateStatusAC());
        },
        statusChange: (body) => {
            dispatch(newStatusTextAC(body));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);