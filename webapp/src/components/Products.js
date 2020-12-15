import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filter: ""
        };
    };

    componentDidMount(){
        axios.get(`https://localhost:10003/api/v1/products`)
            .then(res => {
                this.setState({ 
                    products: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    filterHandler = (event) => {
        this.setState({
            ...this.state,
           [event.target.name]: event.target.value
        });
    };

    render(){
        return(
            <div>
                <Header/>
                <h2>Products</h2>
                <label>Filter by:</label>
                <select name="filter" onChange = {this.filterHandler}>
                    <option value="highest_price">Highest Price</option>
                    <option value="lowest_price">Lowest Price</option>
                    <option value="latest_purchase">Latest Purchase</option>
                </select>
                {/* { this.props.products.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Description</th>
                            <th>Product Date</th>
                            <th>Product Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.products.map(product => {
                            return(
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.type}</td>
                                    <td>{product.description}</td>
                                    <td>{product.date}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> : <h2>There are no products.</h2>} */}
                <button><Link to="/new-product">New Product</Link></button>
            </div>
        );
    };
}