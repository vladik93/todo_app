import "./Panel.css";
import React from "react";
import AddButton from "./AddButton";

const Panel = () => {
  return (
    <div className="panel">
      <div className="task"></div>
      <div className="task"></div>
      <div className="task"></div>
      <div className="task"></div>
      <div className="task"></div>
      <div className="task"></div>
      <div className="task"></div>
      <div className="task"></div>
      <AddButton />
    </div>
  );
};

export default Panel;
