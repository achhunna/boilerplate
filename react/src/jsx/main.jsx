import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import App from './app';
import thunk from 'redux-thunk';
import '../styles/main.scss';

const init = {
  data: {
    name: 'Achhunna'
  }
};
const store = createStore(reducer, init, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('container')
);
