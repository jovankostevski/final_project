import React from 'react';

export class NewProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name: "",
            product_description: "",
            product_type: "",
            purchase_date: "",
            product_price: ""
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        const product = {
            product_name: this.product_name,
            product_description: this.product_description,
            product_type: this.product_type,
            purchase_date: this.product_date,
            product_price: this.product_price
        }
        axios.post('/api/v1/user/create', { product })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
            <div>
                <h2>New Product</h2>
                <form onSubmit = {this.submitHandler}>
                    <label><p>Product Name</p>
                        <input 
                            type = "text"
                            name =  "product_name"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Product Description</p>
                        <input 
                            type = "text"
                            name =  "product_description"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Product Type</p>
                        <input 
                            type = "email"
                            name =  "product_type"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Purchase Date</p>
                        <input 
                            type = "date"
                            name =  "purchase_date"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <label><p>Product Price</p>
                        <input 
                            type = "text"
                            name =  "product_price"
                            onChange = {this.inputChangeHandler}
                        />
                    </label>
                    <br/>
                    <button className='button-solid-large'>CREATE PRODUCT</button>
                </form>
            </div>
        );
    };
}