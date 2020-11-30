import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));
