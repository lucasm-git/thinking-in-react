import React, { Component } from 'react';

class SearchBar extends Component {

    constructor( props ) {
        super( props );
    }
    
    render() { 
        return (
            <div className="searchComponent">
                <input type="text" placeholder="search..."/>
                <br/>
                <label>
                    <input type="checkbox"/>
                    Only show products in stock
                </label>
            </div>
        );
    }
}
 
export default SearchBar;