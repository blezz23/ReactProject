import React from 'react';
import Main from './Main';
import {setToggleIsFetching, setUserProfile} from '../../../Redux/main-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import {usersAPI} from "../../../API/API";

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getUserId(userId)
            .then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUserProfile(data)
            });
    }

    render() {
        return <>
                {this.props.isFetching ?
                    <Preloader/> : null}
                <Main {...this.props} userProfile={this.props.userProfile}/>
            </>
    }
}

let mapStateToProps = (props) => ({
    userProfile: props.mainPage.userProfile,
    isFetching: props.mainPage.isFetching
});

let WithUrlDataContainerComponent = withRouter(MainContainer);

export default connect(mapStateToProps, {setUserProfile, setToggleIsFetching})(WithUrlDataContainerComponent);