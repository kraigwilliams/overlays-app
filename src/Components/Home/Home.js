import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
 


function Home(){

    useEffect(() => {
        document.title = "Home- Login or Create Account"
     }, []);

return(
    <div className="home-page">
<div className="home-left">
<p><i className="fas fa-bookmark"></i>Save Your Opinions on any page you visit on the web.</p>
<p><i className="fas fa-bookmark"></i>Leave Your View on Everything</p>

    <p><i className="fas fa-bookmark"></i>Save What's Important to You</p>
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