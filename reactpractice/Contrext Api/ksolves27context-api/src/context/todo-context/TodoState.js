import React, { useReducer } from "react";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todo-actions";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";

const TodoState = (props) => {
  //initial value
  const initValue = {
    todos: [],
  };

  //add todo
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
  //toggle todo
  const toggleToTodo = (todoId) => {
    dispatch({ type: TOGGLE_TODO, payload: todoId });
  };
  //delete todo
  const deleteTodo = (todoId) => {
    dispatch({ type: DELETE_TODO, payload: todoId });
  };

  const [state, dispatch] = useReducer(todoReducer, initValue);
  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, toggleToTodo, deleteTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
