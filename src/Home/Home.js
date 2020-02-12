import React from 'react';
import {Link} from 'react-router-dom'

 


function Home(){
return(
    <>

    <h3>Share Your World</h3>


    <p>
     <Link to="/register">Create Account</Link> or <Link to="/login">Login</Link>

    </p>
    </>
)
}

export default Home;