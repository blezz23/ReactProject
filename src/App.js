import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import News from './components/Content/News/News';
import Settings from './components/Content/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import FriendsContainer from './components/Content/Friends/FriendsContainer';
import MainContainer from './components/Content/Main/MainContainer';

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="add-wrapper-content">
                <Route path="/main/:userId?"
                       render={() => <MainContainer />} />
                <Route path="/friends"
                       render={() => <FriendsContainer />} />
                <Route path="/dialogs"
                       render={() => <DialogsContainer />} />
                <Route path="/news"
                       render={() => <News />} />
                <Route path="/settings"
                       render={() => <Settings />} />
            </div>
        </div>
    );
};

export default App;