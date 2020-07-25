import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageBody = props.dialogsPage.newMessagesText;

    let onAddNewMessage = () => {
        props.addNewMessage();
    };
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.messageChange(body);
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
                    <button onClick={onAddNewMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;