import React, { Component } from 'react'
import ProductForm from './ProductForm';
import Button from '@material-ui/core/Button';

export default class ProductRow extends Component {
    state = {
        isEdit: false
    };

    onEditProduct = updatedProduct => {
        this.setState({ isEdit: false });
        this.props.onEditProduct(updatedProduct);
    };
    render() {
        const { product, onRemoveProduct } = this.props;
        const { isEdit } = this.state;
        if (isEdit) {
            return (
                <div>
                    <ProductForm onSubmitProduct={this.onEditProduct} product={product} />
                    <button onClick={() => this.setState({ isEdit: false })}>Cancel</button>
                </div>
            )
        }
        return (
            <tr className='product-line'>
                <th className='product-example'>{product.name}</th>
                <th className='product-example'>{product.category}</th>
                <th className='product-example'>{product.price}</th>
                <th className='product-example'>{product.rest}</th>
                <th className='product-example'><Button variant="contained" color="secondary" onClick={() => onRemoveProduct(product.id)}>Remove</Button>---
                    <Button variant="outlined" color="primary" onClick={() => this.setState({ isEdit: true })}>Edit</Button></th>
            </tr>
        )
    }
}