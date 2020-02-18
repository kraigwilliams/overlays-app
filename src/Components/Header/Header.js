import React from 'react';
import {Link} from 'react-router-dom';
 import './header.css'
function Header(){
return(
    <>
    <Link to= "/"><header><h1 id="header">Overlays App</h1></header></Link>
    </>
)

}


export default Header