import React ,{Component} from 'react';
import config from '../../config';
import TokenService from '../../services/token-service'
import {Link} from 'react-router-dom';
class Nav extends Component{

componentDidMount(){

// fetch()

}

    render(){
        return(
            <>
            <Link to="/logout">Logout</Link>
            <nav><span>User Name</span></nav>
            </>
            
            
            )
    }
    




}

export default Nav