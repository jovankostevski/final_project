import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import App from './components/App';

import './assets/css/style.css';
import { Register } from './components/Register';
import { Products } from './components/Products';
import { NewProduct } from './components/NewProduct';
import { Expenses } from './components/Expenses';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/register' component={Register} />
        <Route path='/products' component={Products} />
        <Route path='/new-product' component={NewProduct} />
        <Route path='/expenses' component={Expenses} />
    </BrowserRouter>
    , document.getElementById("root"));
