import { createStore, combineReducers } from "redux";

const change = (value, type) => {
    return {
        value,
        type
    }
}

const globalKeyword = (state = "", action) => {
    return action.value ? action.value : "";
}

const store = createStore(
    combineReducers({ globalKeyword })
);

export {store, change};
