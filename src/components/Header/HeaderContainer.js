import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, loginOut} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }

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

export default connect(mapStateToProps, {authMe, loginOut})(HeaderContainer);