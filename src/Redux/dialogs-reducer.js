const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
    newMessagesText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                name: "I",
                message: state.newMessagesText
            };
            state.messagesData.push(newMessage);
            state.newMessagesText = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.newMessagesText = action.newTextMessage;
            return state;
        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const newMessageTextActionCreator = (body) => ({ type: UPDATE_NEW_MESSAGE, newTextMessage: body });
export default dialogsReducer;