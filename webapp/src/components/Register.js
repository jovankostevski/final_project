import React from 'react';
import { Link } from 'react-router-dom';
import history from 'history/browser';
import axios from 'axios';

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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            date_of_birth: this.state.date_of_birth,
            telephone: this.state.telephone,
            country: this.state.country,
            password: this.state.password
        };
        axios.post('http://localhost:10001/api/v1/user/create', { user })
            .then(res => {
                console.log(res);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    render(){
        return(
            <div className='container'>
                <form onSubmit = {this.submitHandler}>
                    <label><p>First Name</p>
                        <input className='input-field'
                            type = "text"
                            name =  "first_name"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Last Name</p>
                        <input className='input-field'
                            type = "text"
                            name =  "last_name"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>E-mail</p>
                        <input className='input-field'
                            type = "email"
                            name =  "email"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Date of Birth</p>
                        <input className='input-field'
                            type = "date"
                            name =  "date_of_birth"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Telephone</p>
                        <input className='input-field'
                            type = "text"
                            name =  "telephone"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Country</p>
                        <input className='input-field'
                            type = "text"
                            name =  "country"
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
                    <button className='button-solid-large'>REGISTER</button>
                </form>
                <p>Or if you already have an account, <Link to="/">Login</Link>.</p>
            </div>
        );
    };
}