import {createStore} from 'redux'; 

const defaultState = {
    messages: [
        {message: 'hi micah', author: 'Tyler', user: true},
        {message: 'Suck my recently dropped nuts', author: 'Micah', user: false},
        {message: 'containers!', author: 'Bart', user: false },
        {message: 'containers!', author: 'Bart', user: false },
        {message: 'containers!', author: 'Bart', user: false },
        {message: 'containers!', author: 'Bart', user: false },
        {message: 'containers!', author: 'Bart', user: false },
        {message: 'containers!', author: 'Bart', user: false },
        {message: 'kubernetes!', author: 'Bart', user: false }

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
    console.log('in the store'+ message);
    return {
        ...state,
        messages: [...state.messages, message]
    }
}

// export default my_createStore;
export default store;