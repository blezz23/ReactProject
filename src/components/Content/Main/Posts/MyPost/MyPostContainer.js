import React from 'react';
import {addPostActionCreator, newPostTextActionCreator} from "../../../../../Redux/main-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let postChange = (body) => {
        props.store.dispatch(newPostTextActionCreator(body));
    };

    return (
        <MyPost addPost={addPost} postChange={postChange} state={props.store.getState().mainPage}/>
    )
};

export default MyPostContainer;