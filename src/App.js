import "./App.css";
import React, { useState } from "react";
import lists from "./lists";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Panel from "./components/Panel";

function App() {
  const [todoLists, setTodoLists] = useState(lists);
  const [currentListId, setCurrentListId] = useState(1);

  const getListId = (id) => {
    setCurrentListId(id);
  };

  return (
    <div className="app">
      <Header getListId={getListId} todoLists={todoLists} />
      <Panel currentListId={currentListId} todoLists={todoLists} />
      <Footer />
    </div>
  );
}

export default App;
