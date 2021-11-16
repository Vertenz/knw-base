import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './fontawesome';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
            <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
