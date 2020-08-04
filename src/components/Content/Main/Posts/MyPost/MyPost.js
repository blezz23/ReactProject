import React from 'react';
import s from "./MyPost.module.css"
import {Field, reduxForm} from "redux-form";

const AddMyPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                placeholder={'Введите сообщение'}
                name={'newPostBody'}/>
            <button>Добавить пост</button>
        </form>
    )
};

const AddMyPostRedux = reduxForm({form: 'postAddMessageForm'})(AddMyPost);

const MyPost = (props) => {
    let addPost = (values) => {
        props.addPost(values.newPostBody);
    };

    return (
        <div className={s.myPost}>
            <AddMyPostRedux onSubmit={addPost} />
        </div>
    );
};

export default MyPost;