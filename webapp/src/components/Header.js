import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

export default class Products extends React.Component {

    render(){
        return(
            <div>
                <button><Link to="/products">PRODUCTS</Link></button>
                <button><Link to="/expenses">EXPENSES</Link></button>
                <Avatar></Avatar>Gal Gadot             
            </div>
        );
    };
};