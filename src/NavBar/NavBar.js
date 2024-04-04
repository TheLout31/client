import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  function handleOnClick(){
    navigate("/")
  }

  return (
    <nav>
      <div className="logo" onClick={handleOnClick}>
        Aeonaxy Docs
      </div>
      <div className="nav-buttons">
        <button className="signin-button">Sign In</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default NavBar;
