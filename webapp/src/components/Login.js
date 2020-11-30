import React from 'react';
import {connect} from 'react-redux';
import { UserLoginRequest } from '../actions/UserActions';

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
            [event.target.name]: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.UserLoginRequest(this.state);
    }

    render(){
        return(
            <div className = "container">
                <form onSubmit = {this.submitForm}>
                    <p>E-mail</p>
                    <input 
                        type = "email"
                        name =  "email"
                        onChange = {this.inputChangeHandler}
                    />
                    <p>Password</p>
                    <input 
                        type = "password"
                        name =  "password"
                        onChange = {this.inputChangeHandler}
                    />
                    <br/>
                    <button>Sign In</button>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        UserLoginRequest: () => {
            dispatch(UserLoginRequest())
        }
    }
}

export default connect(mapDispatchToProps)(Login);