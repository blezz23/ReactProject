import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../Utilities/validators/validators';
import {login} from '../../Redux/reducers/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import styles from '../../Hoc/ElementForm.module.css';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/main'} />
    }

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
                placeholder={'Email'}
                name={'email'}
                validate={[required, maxLength20]}
                component={Input} />
        </div>
        <div>
            <Field
                placeholder={'Password'}
                name={'password'}
                type={'password'}
                validate={[required, maxLength20]}
                component={Input} />
        </div>
        <div>
            <Field
                component={Input}
                name={'rememberMe'}
                type={'checkbox'} /> Запомнить меня
        </div>
        { props.error && <div className={styles.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.data.isAuth
    }
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default connect(mapStateToProps, {login})(Login);