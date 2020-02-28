import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "Home - Login or Create Account - Overlays";
  }, []);

  return (
    <div className="home-page">
      <div className="home-left">
      <p>
          <i className="fas fa-bookmark"></i>Save Your Opinions on any Page You
          Visit on the Web.
        </p>
        <p>
          <i className="fas fa-bookmark"></i>Save Your Views on Any Everything
        </p>
       
        <p>
          <i className="fas fa-bookmark"></i>Save What's Important to You
        </p>
      </div>

      <div className="home-right">
        <p>
          <Link className="options" to="/register">
           <span className="underline" >Create Account</span>
          </Link>{" "}
          or{" "}
          <Link className="options" to="/login">
            <span className="underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
