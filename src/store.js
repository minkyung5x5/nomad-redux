import { configureStore } from '@reduxjs/toolkit';

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
    return {
        type: ADD,
        text
    };
};

const deleteToDo = id => {
    return {
        type: DELETE,
        id: parseInt(id)
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            console.log("???")
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
};

const store = configureStore({
    reducer: reducer,
});

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;