import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newProductName: props.product?.name,
            newProductCategory: props.product?.category,
            newProductPrice: props.product?.price,
            newProductRest: props.product?.rest,
        }
    };

    onChangeName = e => {
        this.setState({
            newProductName: e.target.value
        })
    };

    onChangeCategory = e => {
        this.setState({
            newProductCategory: e.target.value
        })
    };

    onChangePrice = e => {
        this.setState({
            newProductPrice: +e.target.value
        })
    };

    onChangeRest = e => {
        this.setState({
            newProductRest: +e.target.value
        })
    };

    resetForm = () => {
        this.setState({
            newProductName: '',
            newProductCategory: '',
            newProductPrice: '',
            newProductRest: '',
        })
    };

    submitProduct = () => {
        const { product } = this.props;
        const { newProductName: name, newProductCategory: category, newProductPrice: price, newProductRest: rest } = this.state;
        const newProduct = { name, category, price, rest, id: product ? product.id : Date.now() };
        if (!newProduct.name || !newProduct.category) return alert('Name or other information is required');
        if (newProduct.price === 0 || !newProduct.price) return alert('Is the product is free?');
        if (newProduct.rest === 0 || !newProduct.rest) return alert('Sorry, but we cant add nothing)');
        this.props.onSubmitProduct(newProduct);
        this.resetForm();
    };


    render() {
        const { newProductName, newProductCategory, newProductPrice, newProductRest } = this.state;
        return (
            <div className='product-form'>
                <TextField id="filled-basic" value={newProductName} onChange={this.onChangeName} placeholder='name' name='name' type="text" />
                <TextField id="filled-basic" value={newProductCategory} onChange={this.onChangeCategory} placeholder='category' name='category' type="text" />
                <TextField id="filled-basic" value={newProductPrice} onChange={this.onChangePrice} placeholder='price' name='price' type="number" />
                <TextField id="filled-basic" value={newProductRest} onChange={this.onChangeRest} placeholder='rest' name='rest' type="number" />
                <Button variant="contained" color="primary" onClick={this.submitProduct}>Submit product</Button>
            </div>
        );
    }
}