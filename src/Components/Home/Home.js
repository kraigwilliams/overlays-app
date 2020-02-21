import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
 


function Home(){
return(
    <div className="home-page">
<div className="home-left">
<p>Save Your Opinions on any page you visit on the web.</p>
<p>Leave Your View on Everything</p>

    <p>Save What's Important to You</p>
</div>


<div className="home-right">
    


    <p>
    <Link className="options" to="/register">Create Account</Link> or <Link className="options" to="/login">Login</Link>

    </p>
    </div>

    </div>
)
}

export default Home;