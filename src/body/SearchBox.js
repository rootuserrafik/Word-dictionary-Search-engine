import React from 'react'
import './SearchBox.css'
// import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

function SearchBox() {
    return (
        <div className="searchArea">
            <input placeholder='type to search' className='searchBox' type="text"/>
            {/* <SearchIcon className='app__SearchIcon' /> */}
            <Link to='/search' className="btn__Search">Search</Link>
        </div>
    )
}

export default SearchBox
