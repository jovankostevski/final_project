import React from 'react';
import { connect } from 'react-redux';
import { UserCreateRequest } from '../actions/UserActions';
import { Link } from 'react-router-dom';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            date_of_birth: "",
            telephone: "",
            country: "",
            password: ""
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.UserCreateRequest(this.state);
    }
    
    render(){
        return(
            <div className='container'>
                <form onSubmit = {this.submitHandler}>
                    <label><p>First Name</p>
                        <input 
                            type = "text"
                            name =  "first_name"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Last Name</p>
                        <input 
                            type = "text"
                            name =  "last_name"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>E-mail</p>
                        <input 
                            type = "email"
                            name =  "email"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Date of Birth</p>
                        <input 
                            type = "date"
                            name =  "date_of_birth"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Telephone</p>
                        <input 
                            type = "text"
                            name =  "telephone"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Country</p>
                        <input 
                            type = "text"
                            name =  "country"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Password</p>
                        <input 
                            type = "password"
                            name =  "password"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <br/>
                    <button className='button-solid-large'>REGISTER</button>
                </form>
                <p>Or if you already have an account, <Link to="/">Login</Link>.</p>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        UserCreateRequest: () => {
            dispatch(UserCreateRequest())
        }
    }
}

export default connect(mapDispatchToProps)(Register);