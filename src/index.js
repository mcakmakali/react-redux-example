import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware} from "redux";
import  { Provider } from 'react-redux';
import rootReducers from "./reducers";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";



const middlewares = [reduxThunk];

if(process.env.NODE_ENV ==="development"){
    middlewares.push(logger);
}

const store = createStore(rootReducers, applyMiddleware(...middlewares));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
