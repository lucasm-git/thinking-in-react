import React, { Component } from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {

    constructor( props ) {
        super( props );
    }
    
    render() {

        const products = this.props.data.data;
        
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>

                    <ProductCategoryRow name="Sporting Goods"/>

                    {products.map(( oneProduct, index ) =>
                        oneProduct.category === "Sporting Goods" &&
                        <ProductRow key={ index } product={ oneProduct }/>
                    )}
                    
                    <ProductCategoryRow name="Electronics"/>

                    {products.map((oneProduct, index ) =>
                        oneProduct.category === "Electronics" &&
                        <ProductRow key={ index } product={ oneProduct }/>
                    )}

                </tbody>
            </table>
        );
    }
}
 
export default ProductTable;