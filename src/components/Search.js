import React from 'react'

export default function Search({ handleSearch }) {
    return (
        <div className='search-bar'>
            <input 
                placeholder="Enter Search" 
                onChange={ handleSearch }
                name="search"
            />
        </div>
    )
}
