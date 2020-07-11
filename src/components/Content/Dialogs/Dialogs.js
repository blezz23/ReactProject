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

const dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Lol'},
    {id: 3, message: 'Yo'}
];

const messagesElements = messagesData.map(m => <Message message={m.message}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;