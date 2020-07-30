import React from 'react';
import Main from './Main';
import {getUserId} from '../../../Redux/main-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';

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

let mapStateToProps = (props) => ({
    userProfile: props.mainPage.userProfile,
    isFetching: props.mainPage.isFetching
});

let WithUrlDataContainerComponent = withRouter(MainContainer);

export default connect(mapStateToProps, {getUserId})(WithUrlDataContainerComponent);