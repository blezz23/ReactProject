import React from 'react';
import s from "./MyPost.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../Utilities/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";

let maxLength15 = maxLengthCreator(15);

const AddMyPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                placeholder={'Введите сообщение'}
                name={'newPostBody'}
                validate={[required, maxLength15]} />
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