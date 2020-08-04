import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authMeAPI} from "../../API/API";
import {authMe} from "../../Redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utilities/validators/validators";

const Login = (props) => {
    const onSubmit = (formData) => {
        authMeAPI.login(formData)
            .then(response => {
            if (response.resultCode === 0) {
                authMe()
            }
        })
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

let maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={'Login'}
                name={'login'}
                validate={[required, maxLength20]}
                component={Input} />
        </div>
        <div>
            <Field
                placeholder={'Password'}
                name={'password'}
                validate={[required, maxLength20]}
                component={Input} />
        </div>
        <div>
            <Field
                component={Input}
                name={'rememberMe'}
                type={'checkbox'} /> Запомнить меня
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default Login;