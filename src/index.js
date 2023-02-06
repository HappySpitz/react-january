import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

function reducer(state= 0, action) {
    switch (action.type) {
        case "INC":
            state = state + action.payload;
            return state;
        case "DEC":
            state = state - action.payload
            return state;
        default:
            return state;
    }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
