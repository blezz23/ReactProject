import React from 'react';
import s from "./Main.module.css"
import Avatar from "./Avatar/Avatar";
import Posts from "./Posts/Posts";
import MyPostContainer from "./Posts/MyPost/MyPostContainer";

const Main = (props) => {
    return (
        <div className={s.content}>
            <Avatar />
            <MyPostContainer store={props.store} />
            <Posts state={props.store.getState().mainPage} />
        </div>
    );
};

export default Main;