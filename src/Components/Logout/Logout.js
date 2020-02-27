import React, { Component } from "react";
//import AuthApiService from '../../services/auth-api-service'
import TokenService from "../../services/token-service";

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
          <button type="submit" onClick={() => this.props.history.push("/")}>
            {" "}
            <i className="fas fa-backspace"></i>
            <span> NO</span>
          </button>
        </p>

        <form onSubmit={this.handleLogout}>
          <input type="submit" value="Logout" />
        </form>
      </>
    );
  }
}

export default Logout;
