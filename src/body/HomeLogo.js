import React from 'react'
import logo from './img/logo.png'
import { Link } from "react-router-dom";
import './HomeLogo.css'

function HomeLogo() {
    return (
        <div className="HomeLogo">
            <div className='App__SearchBox '>
                <div className="App__logo">
                    <Link to='/'><img className="logocss" src={logo} alt=""/></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeLogo
