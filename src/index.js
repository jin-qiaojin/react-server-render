import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from './redux/store';
import { Provider } from 'react-redux';

const store = configureStore(window.__INITIAL_STATE__);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
