import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/Content/News/News';
import Settings from './components/Content/Settings/Settings';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import FriendsContainer from './components/Content/Friends/FriendsContainer';
import MainContainer from './components/Content/Main/MainContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="add-wrapper-content">
                    <Route path="/login"
                           render={() => <Login/>}/>
                    <Route path="/main/:userId?"
                           render={() => <MainContainer/>}/>
                    <Route path="/friends"
                           render={() => <FriendsContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/news"
                           render={() => <News/>}/>
                    <Route path="/settings"
                           render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
