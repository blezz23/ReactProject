import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {loginOut} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (props) => {
    return {
        isAuth: props.auth.data.isAuth,
        login: props.auth.data.login
    }
};

export default connect(mapStateToProps, {loginOut})(HeaderContainer);