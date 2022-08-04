import React from 'react'
import SearchBox from '../SearchBox'
import SearchOptions from './SearchOptions'
import './SearchPageNav.css'

function SearchPageNav() {
    return (
        <div className="App__SPN">
            <SearchBox />
            <SearchOptions />
        </div>
    )
}

export default SearchPageNav
