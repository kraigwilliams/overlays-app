import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "Home - Login or Create Account - Overlays";
  }, []);

  return (
    <div className="home-page">
    <div className="home-page-top">
      <div className="home-left">
      <p>
          <i className="fas fa-bookmark"></i>Save Your Opinions on any Page You
          Visit on the Web.
        </p>
        <p>
          <i className="fas fa-bookmark"></i>Save Your Views on Everything
        </p>
       
        <p>
          <i className="fas fa-bookmark"></i>Save What's Important to You
        </p>
      </div>

      <div className="home-right">
        
          <Link className="options" to="/register">
           <span className="underline" >Create Account</span>
          </Link>
          <span>or</span>
          <Link className="options" to="/login">
            <span className="underline">Login</span>
          </Link>
        
      </div>
      
    </div> 
    <div className="home-bottom">
    
    
      <p>To demo Overlays App you may login with:<br/>
      username: kwill<br/>
      password: 1@Thinkful
      </p>
      </div>
    </div>
  );
}

export default Home;
