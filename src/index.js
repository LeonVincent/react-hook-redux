import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker';

import { makeStore } from './Store'

const store = makeStore()

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
