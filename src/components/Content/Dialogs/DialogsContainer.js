import React from 'react';
import {addNewMessageActionCreator, newMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (body) => {
            dispatch(newMessageTextActionCreator(body));
        },
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;