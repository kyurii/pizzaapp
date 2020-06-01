import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from './_helpers';
import { Router } from 'react-router-dom';

import App from './components/App';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router history={ history }>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
