
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchAutoComplete } from './api'

const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestion] = useState('');
    
    useEffect(()=>{
        
        fetchAutoComplete(searchQuery)
        .then(resp => setSuggestion(resp))
        .catch(err => console.log(err)) 
        
    }, [searchQuery])

const searchInputField = React.createRef();

const clickOutsideSearch = (event) => {
    if (suggestions && searchInputField.current !== null && !searchInputField.current.contains(event.target)){
        setSuggestion('')
    }
}

useEffect(()=> {
    window.addEventListener('click', clickOutsideSearch)
    return () => window.removeEventListener('click', clickOutsideSearch)
})



    return <div id="search-bar-container">
                <div>
                    <input  ref={searchInputField} 
                            id="search-bar-input" 
                            data-searchquery={searchQuery} 

                            //--keydown doesn't redirect to recipes page from other??
                            onKeyDown={(event) => event.keyCode == 13 ? props.searchQuery(event) : ''}

                            onChange={() => {
                                setSearchQuery(document.querySelector('#search-bar-input').value)}} 
                            type="text" 
                            placeholder=" &#128269; Get inspired by 1000's of recipes..."
                    />

                    { suggestions && searchQuery && <ul id="autoComplete-ul">{suggestions.map(suggestion => <Link to={"/recipes/"+ suggestion.id} ><li>{suggestion.title}</li></Link>)}</ul> }        
                </div>
                <Link to="/recipes">     
                    <button className="clickable" 
                            id="search-button" 
                            data-searchquery={searchQuery} 
                            onClick={props.searchQuery}>
                        Search
                    </button>
                </Link>
            
            </div>

}

export default SearchBar

