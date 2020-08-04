import React from 'react';
import {addPostAC} from "../../../../../Redux/main-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText));
        }
    }
};

const MyPostContainer = connect(null, mapDispatchToProps) (MyPost);

export default MyPostContainer;