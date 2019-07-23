import {createStore} from 'redux'; 

const defaultState = {
    messages: []
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