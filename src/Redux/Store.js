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

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 4,
            message: this._state.mainPage.newPostText
        };

        this._state.mainPage.postsData.push(newPost);
        this._state.mainPage.newPostText = '';
        this.rerenderEntireTree(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 4,
            name: "I",
            message: this._state.dialogsPage.newMessagesText
        };

        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessagesText = '';
        this.rerenderEntireTree(this._state);
    },

    updateNewPostText(newText) {
        this._state.mainPage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },

    updateNewMessage(newTextMessage) {
        this._state.dialogsPage.newMessagesText = newTextMessage;
        this.rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    rerenderEntireTree: () => {}
};

export default store;