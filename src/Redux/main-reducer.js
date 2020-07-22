const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'lol'},
        {id: 2, message: 'ne lol'},
        {id: 3, message: 'da ne'}
    ],
    newPostText: ''
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newTextPost;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const newPostTextActionCreator = (body) => ({ type: UPDATE_NEW_POST_TEXT, newTextPost: body });
export default mainReducer;