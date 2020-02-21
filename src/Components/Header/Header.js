import React from 'react';
import {Link} from 'react-router-dom';
 import './header.css'
import Nav from '../Nav/Nav'


function Header(){
return(
    <header>
    <Link className="header-color" to= "/"><h1 id="header">Overlays App</h1></Link>
     <span id ="nav"><Nav /></span> 
    </header>
)

}


export default Header