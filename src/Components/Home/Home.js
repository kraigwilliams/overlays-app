import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
 


function Home(){
return(
    <div className="home-page">
<div className="home-left">
<p>Save Your Opinions</p>
<p>Leave Your View on Everything</p>

    <p>Save What's Important to You</p>
</div>


<div className="home-right">
    


    <p>
     <Link to="/register">Create Account</Link> or <Link to="/login">Login</Link>

    </p>
    </div>

    </div>
)
}

export default Home;