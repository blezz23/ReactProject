import React from 'react';
import mainReducer, {addPostAC, deletePostAC} from "./main-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Lol'},
        {id: 2, message: 'ne lol'},
        {id: 3, message: 'samurai!!!'}]
};

test('length of posts should be incremented', () => {
    let action = addPostAC('kavabanga');
    let newState = mainReducer(state, action);
    expect(newState.postsData.length).toBe(4);
});

test('message of new post should be correct', () => {
    let action = addPostAC('kavabanga');
    let newState = mainReducer(state, action);
    expect(newState.postsData[3].message).toBe('kavabanga');
});

test('after deleting length of message should be decremented', () => {
    let action = deletePostAC(1);
    let newState = mainReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});


