import React, {Component} from 'react';


class Login extends Component{

    render(){
    return(
    <>

    <h3>Login</h3>
<form>
<input type="text" placeholder="username"/><br/><br/>
<input type="password" placeholder="password"/><br/><br/>
<input type="submit" value="Login"/>
</form>

</>
    )}
}

export default Login;