import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './reducers/dialogs-reducer';
import mainReducer from './reducers/main-reducer';
import friendsReducer from './reducers/friends-reducer';
import authReducer from './reducers/auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./reducers/app-reducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;