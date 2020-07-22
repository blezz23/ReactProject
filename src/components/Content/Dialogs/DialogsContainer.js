import React from 'react';
import {addNewMessageActionCreator, newMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    };
    let messageChange = (body) => {
        props.store.dispatch(newMessageTextActionCreator(body));
    };

    return (
        <Dialogs messageChange={messageChange} addNewMessage={addNewMessage}
                 state={props.store.getState().dialogsPage}/>
    );
};

export default DialogsContainer;