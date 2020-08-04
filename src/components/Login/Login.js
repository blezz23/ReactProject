import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authMeAPI} from "../../API/API";
import {authMe} from "../../Redux/auth-reducer";

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

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={'input'} />
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={'input'} />
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> Запомнить меня
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default Login;