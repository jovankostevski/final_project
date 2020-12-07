import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';

import './assets/css/style.css';
import { Register } from './components/Register';
import { Products } from './components/Products';
import { NewProduct } from './components/NewProduct';
import { Expenses } from './components/Expenses';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path='/' component={App} />
            <Route path='/register' component={Register} />
            <Route path='/products' component={Products} />
            <Route path='/new-product' component={NewProduct} />
            <Route path='/expenses' component={Expenses} />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));
