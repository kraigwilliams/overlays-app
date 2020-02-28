import React, { Component } from "react";
//import AuthApiService from '../../services/auth-api-service'
import TokenService from "../../services/token-service";

import {Button} from '../Utils/Utils';
class Logout extends Component {
  componentWillMount() {
    document.title = "Login / Logout - Overlays";
  }

  handleLogout = event => {
    event.preventDefault();
    TokenService.clearAuthToken();

    this.props.history.push("/");
  };

  render() {
    //const fastyle=`<i class="fas fa-backspace"></i>`;

    return (
      <>
        <p>
          Are you sure you want to logout?
          <Button type="submit" onClick={() => this.props.history.push("/")}>
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
