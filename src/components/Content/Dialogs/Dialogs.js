import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, newMessageTextActionCreator} from "../../../Redux/Store";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    };
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(newMessageTextActionCreator(text));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <textarea onChange={onMessageChange} ref={newMessage} value={props.state.newMessagesText}/>
                <button onClick={addNewMessage}>Отправить</button>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;