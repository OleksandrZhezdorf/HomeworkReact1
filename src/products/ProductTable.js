import React, { Component } from 'react'
import ProductForm from './ProductForm';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    state = {
        products: [
            { id: '1', name: 'chairs', category: 'second', price: 10, rest: 1200 },
            { id: '2', name: 'tables', category: 'first', price: 15, rest: 200 },
            { id: '3', name: 'carpets', category: 'second', price: 13, rest: 118 },
            { id: '4', name: 'beds', category: 'third', price: 44, rest: 11 },
        ],
    };

    addProduct = newProduct => {
        this.setState({
            products: [...this.state.products, newProduct]
        })
    };

    removeProduct = id => {
        this.setState({
            products: this.state.products.filter(product => product.id !== id)
        })
    };

    editProduct = updatedProduct => {
        this.setState({
            products: this.state.products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
        })

    };

    render() {
        const { products } = this.state;
        return (
            <div>
                <table className='table-products'>
                    <caption className='table-title'>Таблица товаров</caption>
                    <tr className='product-line'>
                        <th className='product-example'>Наименование</th>
                        <th className='product-example'>Категория</th>
                        <th className='product-example'>Цена</th>
                        <th className='product-example'>Остаток на складе</th>
                        <th className='product-example'>Действие</th>
                    </tr>
                    {products.map(product =>
                        <ProductRow
                            key={product.id}
                            product={product}
                            onRemoveProduct={this.removeProduct}
                            onEditProduct={this.editProduct}
                        />)}
                </table>
                <ProductForm onSubmitProduct={this.addProduct} />
            </div>
        );
    }
}