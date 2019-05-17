// added for IE11
import 'babel-polyfill';

//React
import React from "react";
import ReactDOM from "react-dom";

//Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from './reducers'

//CSS Reset
import "./index.css";

//Components
import App from "./App";

//reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//dummy starter reducer 
// function reducer () {
//     state: {}
// }

//Redux Dev Tools 


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
