import React from 'react'
import './Header.css'
import HeaderRight from './HeaderRight'

function Header() {
    return (
        <div className='App__Header'>
            <header className="App-header">
                <nav className="mainMenu">
                    <ul>
                        <li><a href="#">Dictionary</a></li>
                        <li><a href="#">Thesaurus</a></li>
                        <li><a href="#">Examples</a></li>
                        <li><a href="#">Sentences</a></li>
                        <li><a href="#">Quotes</a></li>
                    </ul>
                </nav>
            </header>
            <HeaderRight className="App__Header__Right" />
        </div>
    )
}

export default Header
