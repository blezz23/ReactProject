import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, newMessageTextActionCreator} from "../../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageBody = props.state.newMessagesText;

    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    };
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(newMessageTextActionCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea placeholder="Введите сообщение" onChange={onMessageChange} value={newMessageBody}/>
                </div>
                <div>
                    <button onClick={addNewMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;