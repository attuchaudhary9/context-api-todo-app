import React from "react";
import TodoList from "./components/TodoList";
import TodoState from "./context/todo-context/TodoState";

const App = () => {
  return (
    <div className="container py-3 ">
      <h1 className="text-center">
        Context API with useReducer and useContext
      </h1>
      <div className="container py-3">
        <TodoState>
          <TodoList />
        </TodoState>
      </div>
    </div>
  );
};

export default App;
