import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {authMeAPI} from "../../API/API";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authMeAPI.authMe().then(data => {
                    if (data.resultCode === 0) {
                        let {id, email, login} = data.data;
                        this.props.setAuthUserData(id, email, login);
                    }
                }
            )
    }

    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (props) => {
    return {
        isAuth: props.auth.isAuth,
        login: props.auth.data.login
    }
};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);