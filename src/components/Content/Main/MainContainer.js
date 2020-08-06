import React from 'react';
import Main from './Main';
import {getStatus, getUserId, updateStatus} from '../../../Redux/reducers/main-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {compose} from "redux";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getUserId(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <>
                {this.props.isFetching ?
                    <Preloader/> : null}
                <Main
                    userProfile={this.props.userProfile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus} />
            </>
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.mainPage.userProfile,
    status: state.mainPage.status,
    isFetching: state.mainPage.isFetching,
    authUserId: state.auth.data.id,
    isAuth: state.auth.data.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserId, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(MainContainer);