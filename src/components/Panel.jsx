import "./Panel.css";
import React from "react";
import tasks from "../tasks";
import AddButton from "./AddButton";
import Task from "./Task";

const Panel = ({ currentListId, todoLists = [] }) => {
  const currentList = () => {
    let currentList = todoLists[currentListId];

    return currentList;
  };

  return (
    <div className="panel">
      {currentListId !== 1
        ? tasks
            .filter((value) => value.id === currentListId)
            .map((task) => {
              return <Task text={task.text} />;
            })
        : tasks.map((task) => {
            return <Task currentList={currentList} text={task.text} />;
          })}
      <AddButton />
    </div>
  );
};

export default Panel;
