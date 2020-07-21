const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
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