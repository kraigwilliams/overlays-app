import React,{Component} from 'react';
//import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service';

class Logout extends Component{
    
    
    
 handleLogout=event=>{
        event.preventDefault();
        TokenService.clearAuthToken();
        console.log("this",this)
        this.props.history.push('/topics');
        
        
         }


render(){

   
  return(

<>
<p>Are You sure you want to logout?</p>

<form onSubmit={this.handleLogout}>
    <input type="submit" value="Logout" />

</form>


</>
)
}

}

export default Logout