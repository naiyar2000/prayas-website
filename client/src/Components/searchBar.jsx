import React from 'react'
import './css/searchBar.css'

const SearchBar = () => {
    return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginRight: '4rem'}}>
        <div className="form-group">
            <input type="text" className="form-field" placeholder="Enter booking code"/>
            <div className="fas fa-arrow-right"></div>
        </div>
    </div>
    )
}

export default SearchBar
