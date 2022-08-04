import React from 'react'
import HeaderRight from '../../header/HeaderRight'
import SearchPageBody from './SearchPageBody'
import SearchPageNav from './SearchPageNav'
import './SearchPage.css'
import HomeLogo from '../HomeLogo'

function SearchPage() {
    return (
        <div className='App__SearchPage'>
            <div className="SubHeader">
                <HomeLogo className="SearchPageLogo" />
                <SearchPageNav />
                <HeaderRight />
            </div>
            <SearchPageBody />
        </div>
    )
}

export default SearchPage
