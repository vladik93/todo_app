import "./Task.css";
import React from "react";

const Task = ({ currentList, text }) => {
  return (
    <div className="task">
      <div className="col">
        <input type="checkbox" />
      </div>
      <div classNaem="col">
        <p>{text}</p>
        {currentList ? <p className="text-sm">{currentList().label}</p> : null}
      </div>
    </div>
  );
};

export default Task;
