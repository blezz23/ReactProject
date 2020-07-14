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
                           state={props.state.mainPage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText} />} />
                <Route path="/friends"
                       render={() => <Friends state={props.state.friendsPage} />} />
                <Route path="/dialogs"
                       render={() => <Dialogs
                           state={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessage={props.updateNewMessage} />} />
                <Route path="/news"
                       render={() => <News />} />
                <Route path="/settings"
                       render={() => <Settings />} />
            </div>
        </div>
    );
};

export default App;