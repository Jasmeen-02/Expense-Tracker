import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <p className="logo">
        <a href="#abcd#">
          X<span className="highlight">p</span>ensor
        </a>
      </p>
      <div className="nav-items">
        <p className="item">Home</p>
        <p className="item">Search</p>
        <p className="item">History</p>
        <p className="item">Profile</p>
      </div>
    </div>
  );
};

export default Header;
