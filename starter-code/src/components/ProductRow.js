import React, { Component } from 'react';

class ProductRow extends Component {

    constructor( props ) {
        super( props );
    }
    
    render() {

        const { product } = this.props;
        
        return (
            <tr>
                {
                    product.stocked ?
                    <td>{ product.name }</td> :
                    <td className="red">{ product.name }</td>
                }
                <td>{ product.price }</td>
            </tr>
        )
    }
}
 
export default ProductRow;