import React ,{Component} from 'react';


import {Link} from 'react-router-dom';
import './Nav.css'

/* 
Nav component shows the Login/Logout functionality at the top of every page.
*/
class Nav extends Component{


    
    render(){
        return(
            <nav>

 <Link className="nav-color" to="/logout">Login / Logout</Link>

     </nav>
    )




}
}

export default Nav