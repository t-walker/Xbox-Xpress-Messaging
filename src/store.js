import {createStore} from 'redux'; 

const defaultState = {
    messages: [
        {message: 'hi micah', author: 'Tyler', user: true},
        {message: 'Suck my recently dropped nuts', author: 'Micah', user: false}

    ]
}

const store = createStore(reducer, defaultState);

function reducer(state=defaultState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE': 
            return addMessage(state, action.payload)
        default:
            return state;
    }
}

function addMessage(state, message) {
    return {
        ...state,
        messages: [...state.messages, message]
    }
}

export default store;