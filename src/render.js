import React from 'react';
import ReactDOM from 'react-dom';
import './render.css';
import App from "./App";
import {addPost} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};