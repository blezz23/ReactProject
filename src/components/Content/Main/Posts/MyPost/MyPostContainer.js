import React from 'react';
import {addPostActionCreator, newPostTextActionCreator} from "../../../../../Redux/main-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.mainPage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        postChange: (body) => {
            dispatch(newPostTextActionCreator(body));
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;