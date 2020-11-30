import React from 'react';
import { Login } from './Login';

export default class App extends React.Component {

    render(){
        return(
            <div>
                <Login />
                <p>Or if you don't have an account, Register.</p>
            </div>
        );
    };
}