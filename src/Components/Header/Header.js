import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

import Nav from '../Nav/Nav'

/*
Header Component for the entire App
*/ 
function Header(){
return(
    <header>
    <Link to= "/"><h1 id="header">Overlays App</h1></Link>
     <span id ="nav"><Nav /></span> 
    </header>
)

}


export default Header