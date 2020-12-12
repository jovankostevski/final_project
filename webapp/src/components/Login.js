import React from 'react';
import { Link } from 'react-router-dom';
import history from 'history/browser';

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
        axios.post('/api/v1/user/create', { user })
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
                        <input classname='input-field'
                            type = "email"
                            name =  "email"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Password</p>
                        <input classname='input-field'
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