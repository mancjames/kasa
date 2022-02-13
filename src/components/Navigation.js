import logo from '../logo.svg'
import React from 'react';

export default function Navigation(){
    return(
        <nav className="nav container">
             <img src={logo} alt="logo" className="nav__logo"/>
             <ul className="nav__list">
                 <li>Home</li>
                 <li>About</li>
             </ul>
        </nav>
    )
}