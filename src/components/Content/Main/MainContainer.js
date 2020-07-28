import React from 'react';
import Main from './Main';
import * as axios from 'axios';
import {setToggleIsFetching, setUserProfile} from '../../../Redux/main-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                {this.props.isFetching ?
                    <Preloader/> : null}
                <Main {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (props) => ({
    userProfile: props.mainPage.userProfile,
    isFetching: props.mainPage.isFetching
});

let WithUrlDataContainerComponent = withRouter(MainContainer);

export default connect(mapStateToProps, {setUserProfile, setToggleIsFetching})(WithUrlDataContainerComponent);