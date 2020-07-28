import React from 'react';
import s from './Main.module.css'
import Avatar from './Avatar/Avatar';
import PostsContainer from './Posts/PostsContainer';
import MyPostContainer from './Posts/MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Main = (props) => {
    return (
        <div className={s.content}>
            <Avatar avatar={props.userProfile}/>
            <ProfileInfo profileInfo={props.userProfile}/>
            <MyPostContainer/>
            <PostsContainer/>
        </div>
    );
};

export default Main;