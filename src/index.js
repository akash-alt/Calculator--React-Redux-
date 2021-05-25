import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css";
import store from "./store";
import {Provider} from "react-redux"

store.subscribe(() =>(console.log(store.getState())))


ReactDOM.render(
    <Provider store={store}>
            <App  />
    </Provider>

,document.getElementById('root'));
