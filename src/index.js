import React from 'react';
import ReactDOM from 'react-dom';

import './style/css/index.css';
import App from './components/App';
import store from './data/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

