import "./Header.css";
import React, { useState } from "react";

const Header = ({ getListId, todoLists = [] }) => {
  const handleListChange = (event) => {
    const { value } = event.target;

    let id = parseInt(value);

    getListId(id);
  };

  return (
    <div className="header">
      <div className="header-col">
        <img src="./icons/check-circle.svg" className="icon-logo" />
        <select className="list-dropdown" onChange={handleListChange}>
          <option value={1}>All Lists</option>
          {todoLists &&
            todoLists.map((list) => {
              return <option value={list.id}>{list.label}</option>;
            })}
          <option value={0}>Finished</option>
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
