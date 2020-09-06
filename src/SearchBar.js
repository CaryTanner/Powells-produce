
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    return <div>
        <input id="search-bar-input" 
                onChange={() => {setSearchQuery(document.querySelector('#search-bar-input').value)}} 
                type="text" placeholder="Get inspired by 1000's of recipes..."
        />
                    
        <Link to="/recipes">     
        <button id="search-button" 
                data-searchQuery={searchQuery} 
                onClick={props.searchQuery}>
            Search
        </button>
        </Link>
        </div>

}

export default SearchBar

// document.querySelector('#search-bar-input')