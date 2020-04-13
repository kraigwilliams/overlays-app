import React ,{Component} from 'react';


import {Link} from 'react-router-dom';
import './Nav.css'
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