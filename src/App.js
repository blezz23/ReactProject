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
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <Footer/>
                <div className="add-wrapper-content">
                    <Route path="/main" render={ () => <Main posts={props.posts} />} />
                    <Route path="/friends" render={ () => <Friends />} />
                    <Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                    <Route path="/news" render={ () => <News />} />
                    <Route path="/settings" render={ () => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;