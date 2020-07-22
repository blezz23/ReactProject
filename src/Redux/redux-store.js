import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import mainReducer from "./main-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;