import React from 'react';

const Header = () => {
    return<div>  
    <header>
        <h1>Powell's <br /> Poultry</h1>
        </header>
       
        <nav>
            <ul>
                <li> <a href="index.html">Home</a></li>
                <li> <a href="recipes.html">Recipes</a></li>
                <li> <a href="about.html">About</a></li>
                <li><a href="contacts.html">Contact</a></li>
                <li><input type="search" placeholder="Search"/><button>Search</button></li>
            </ul>
            

        </nav>
    </div>
}

export default Header