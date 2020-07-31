import React from 'react';
import {addNewMessageActionCreator, newMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);