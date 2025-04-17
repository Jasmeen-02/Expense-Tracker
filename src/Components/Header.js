import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header>
        <p className="logo">
          <a href="#abcd#">
            i<span style={{ color: "#3FB04B" }}>Q</span>lipse
          </a>
        </p>
        <p className="items">Profile</p>
        <p className="items">Search</p>
        <p className="items">Home</p>
      </header>
    </div>
  );
};

export default Header;
