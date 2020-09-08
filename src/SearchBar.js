
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');
    
    // const handleEnter = (event) => {
    //     if (event.key === 'Enter') {
    //         console.log('entered')
    //        this.props.searchQuery()
    //     }
    // }

    return <div>
        
        <input id="search-bar-input" 
                data-searchquery={searchQuery} 
                // onKeyDown={event => { if (event.key === 'enter'){props.searchQuery}}}
                onChange={() => {
                    setSearchQuery(document.querySelector('#search-bar-input').value)}} 
                type="text" placeholder="Get inspired by 1000's of recipes..."
        />
                    
        <Link to="/recipes">     
        <button id="search-button" 
                data-searchquery={searchQuery} 
                onClick={props.searchQuery}>
            Search
        </button>
        </Link>
        
        </div>

}

export default SearchBar

// document.querySelector('#search-bar-input')