// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";

function addMessage(message) {
  return {
    type: "ADD",
    message
  };
}

function messageReducer(state = [], action) {
  switch(action.type) {
    case "ADD":
      let arr7578 = [...state, action.message]
      return arr7578
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer)