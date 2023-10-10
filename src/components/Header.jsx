import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-col">
        <img src="./icons/check-circle.svg" className="icon-logo" />
        <select className="list-dropdown">
          <option>All Lists</option>
        </select>
      </div>
      <div className="header-col">
        <button className="btn-icon">
          <img src="./icons/search.svg" className="icon" />
        </button>
        <button className="btn-icon">
          <img src="./icons/dots-vertical.svg" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
