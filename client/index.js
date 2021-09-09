import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './components/app/store'
import { Provider } from 'react-redux'

import App from './components/app/App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);