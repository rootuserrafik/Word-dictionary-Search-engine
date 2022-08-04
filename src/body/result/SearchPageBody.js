import React from 'react'
import SearchPageBodyContent from './SearchPageBodyContent'
import SearchPageBodySidebarRight from './SearchPageBodySidebarRight'
import './SearchPageBody.css'

function SearchPageBody() {
    return (
        <div className='App__SPB'>
            <SearchPageBodyContent />
            <SearchPageBodySidebarRight />
        </div>
    )
}

export default SearchPageBody
