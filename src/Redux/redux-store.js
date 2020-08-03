import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import mainReducer from './main-reducer';
import friendsReducer from './friends-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    mainPage: mainReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;