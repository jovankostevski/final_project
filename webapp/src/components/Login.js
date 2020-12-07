import React from 'react';
import { connect } from 'react-redux';
import { UserLoginRequest } from '../actions/UserActions';
import { Link, useHistory } from 'react-router-dom';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        this.props.UserLoginRequest(this.state);
        useHistory.push('/products');
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

const mapDispatchToProps = (dispatch) => {
    return {
        UserLoginRequest: () => {
            dispatch(UserLoginRequest())
        }
    };
};

export default connect(mapDispatchToProps)(Login);