import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';

const postsData = [
    {id: 1, message: 'lol'},
    {id: 2, message: 'ne lol'},
    {id: 3, message: 'da ne'}
];

const dialogsData = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Maxim'},
    {id: 3, name: 'Kostya'}
];

const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Lol'},
    {id: 3, message: 'Yo'}
];

ReactDOM.render(
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
