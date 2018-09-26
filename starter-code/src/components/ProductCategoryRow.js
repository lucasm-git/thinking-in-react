import React, { Component } from 'react';

class ProductCategoryRow extends Component {

    constructor( props ) {
        super( props );
    }
    
    render() {

        const { name } = this.props;
        
        return (
            <tr className="centered">
                <td colSpan="2">{ name }</td>
            </tr>
        );
    }
}
 
export default ProductCategoryRow;