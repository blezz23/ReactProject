const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const store = {
    _state: {
        mainPage: {
            postsData: [
                {id: 1, message: 'lol'},
                {id: 2, message: 'ne lol'},
                {id: 3, message: 'da ne'}
            ],
            newPostText: 'newText'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Nikita", avatar: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},
                {id: 2, name: "Maxim", avatar: "https://pm1.narvii.com/7388/55ffd10f441052afd8858b4a53216ae0a64883e3r1-2048-2048v2_hq.jpg"},
                {id: 3, name: "Kostya", avatar: "https://www.meme-arsenal.com/memes/549e8c6d71ae27a2ebd13a7580d71d80.jpg"}
            ],
            messagesData: [
                {id: 1, name: "Nikita", message: 'Hi'},
                {id: 2, name: "Maxim", message: 'Lol'},
                {id: 3, name: "Kostya", message: 'Yo'}
            ],
            newMessagesText: 'message'
        },
        friendsPage: {
            friendsData: [
                {id: 1, name: "Nikita", avatar: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},
                {id: 2, name: "Maxim", avatar: "https://pm1.narvii.com/7388/55ffd10f441052afd8858b4a53216ae0a64883e3r1-2048-2048v2_hq.jpg"},
                {id: 3, name: "Kostya", avatar: "https://www.meme-arsenal.com/memes/549e8c6d71ae27a2ebd13a7580d71d80.jpg"}
            ]
        }
    },

    _rerenderEntireTree: () => {},

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 4,
                message: this._state.mainPage.newPostText
            };

            this._state.mainPage.postsData.push(newPost);
            this._state.mainPage.newPostText = '';
            this._rerenderEntireTree(this._state);
        }
        else if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 4,
                name: "I",
                message: this._state.dialogsPage.newMessagesText
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessagesText = '';
            this._rerenderEntireTree(this._state);
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.mainPage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        }
        else if (action.type === "UPDATE-NEW-MESSAGE") {
            this._state.dialogsPage.newMessagesText = action.newTextMessage;
            this._rerenderEntireTree(this._state);
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const newPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const newMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newTextMessage: text });
export default store;