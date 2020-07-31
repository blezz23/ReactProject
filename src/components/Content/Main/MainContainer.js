import React from 'react';
import Main from './Main';
import {getUserId} from '../../../Redux/main-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {compose} from "redux";

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.getUserId(this.props.match.params.userId)
    }

    render() {
        return <>
                {this.props.isFetching ?
                    <Preloader/> : null}
                <Main {...this.props} userProfile={this.props.userProfile}/>
            </>
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.mainPage.userProfile,
    isFetching: state.mainPage.isFetching,
});

export default compose(
    connect(mapStateToProps, {getUserId}),
    withRouter,
    withAuthRedirect
)(MainContainer);