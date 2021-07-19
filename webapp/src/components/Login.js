import React from 'react';
import { Link } from 'react-router-dom';
import history from 'history/browser';
import axios from 'axios';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            jwt: ""
        };
    };

    inputChangeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:10002/api/v1/auth/login', user)
            .then(res => {
                console.log(res);
                history.push('/products');
            })
            .catch(err => {
                console.log(err);
            })
    };

    render(){
        return(
            <div className='container'>
                <form onSubmit = {this.submitHandler}>
                    <label><p>E-mail</p>
                        <input className='input-field'
                            type = "email"
                            name =  "email"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Password</p>
                        <input className='input-field'
                            type = "password"
                            name =  "password"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <br/>
                    <button className='button-solid-large'>SIGN IN</button>
                </form>
                <p>Or if you don't have an account, <Link to="/register">Register</Link>.</p>
            </div>
        );
    };
};