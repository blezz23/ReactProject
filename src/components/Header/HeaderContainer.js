import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../Redux/auth-reducer";

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
        isAuth: props.auth.isAuth,
        login: props.auth.data.login
    }
};

export default connect(mapStateToProps, {authMe})(HeaderContainer);