import React, { Component } from "react";
//import AuthApiService from '../../services/auth-api-service'
import TokenService from "../../Services/token-service";

import {Button} from '../Utils/Utils';
import './Logout.css'

/*
Logout is responsible for rendering the Logout page to end users.
*/ 
class Logout extends Component {

state ={
loggedIn:false
}
 

  handleLogout = event => {
    event.preventDefault();
    TokenService.clearAuthToken();
  
    this.props.history.push("/");
   
  };

  render() {
    document.title = "Login / Logout - Overlays";

    return (
      <>
        <p>
          <span >Are you sure you want to logout?</span>
          <Button className="logout-cancel" type="submit" onClick={() => this.props.history.push("/")}>
            {" "}
            <i className="fas fa-backspace"></i>
            <span> NO</span>
          </Button>
        </p>

        <form onSubmit={this.handleLogout}>
          <Button type="submit">Logout</Button>
        </form>
      </>
    );
  }
}

export default Logout;
