import React, { Component } from 'react';

import data from './../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <div>
                <SearchBar />
                <ProductTable data={ data }/>
            </div>
        );
    }
}
 
export default FilterableProductTable;