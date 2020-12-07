import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export class Products extends React.Component {

    render(){
        return(
            <div>
                <Header/>
                <h2>Products</h2>
                <label for="filter">Filter by:</label>
                <select name="filter" id="filter">
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