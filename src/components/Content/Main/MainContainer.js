import React from 'react';
import Main from "./Main";
import * as axios from "axios";
import {setUserProfile} from "../../../Redux/main-reducer";
import {connect} from "react-redux";

class MainContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                <Main {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (props) => ({
    userProfile: props.mainPage.userProfile
});

export default connect(mapStateToProps, {setUserProfile})(MainContainer);