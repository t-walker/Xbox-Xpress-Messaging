export const ADD_MESSAGE = 'ADD_MESSAGE'

export function addMessage(message) {
  console.log('in the action' + message);
  return { type: ADD_MESSAGE, payload: message }
}
