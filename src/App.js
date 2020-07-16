import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./components/Content/Main/Main";
import Friends from "./components/Content/Friends/Friends";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import News from "./components/Content/News/News";
import Settings from "./components/Content/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <Footer />
            <div className="add-wrapper-content">
                <Route path="/main"
                       render={() => <Main
                           state={props.store.getState().mainPage}
                           addPost={props.store.addPost.bind(props.store)}
                           updateNewPostText={props.store.updateNewPostText.bind(props.store)} />} />
                <Route path="/friends"
                       render={() => <Friends state={props.store.getState().friendsPage} />} />
                <Route path="/dialogs"
                       render={() => <Dialogs
                           state={props.store.getState().dialogsPage}
                           addMessage={props.store.addMessage.bind(props.store)}
                           updateNewMessage={props.store.updateNewMessage.bind(props.store)} />} />
                <Route path="/news"
                       render={() => <News />} />
                <Route path="/settings"
                       render={() => <Settings />} />
            </div>
        </div>
    );
};

export default App;