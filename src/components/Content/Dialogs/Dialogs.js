import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const dialogsData = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Maxim'},
    {id: 3, name: 'Kostya'}
];

const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Lol'},
    {id: 3, message: 'Yo'}
];

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
};

export default Dialogs;