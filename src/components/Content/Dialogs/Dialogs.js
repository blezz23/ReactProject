import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>);
    let newMessage = React.createRef();
    let addNewMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <textarea ref={newMessage}></textarea>
                <button onClick={addNewMessage}>Отправить</button>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;