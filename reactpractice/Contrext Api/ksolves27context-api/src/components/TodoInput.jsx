import React,{useState,useContext} from "react";
import TodoContext from '../context/todo-context/todo-context'
const TodoInput = () => {
  const [inputValue,setInputValue] = useState();
  const {addTodo} = useContext(TodoContext)
  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    // console.log('Todo Value',inputValue);
    const newTodoItem = {
      id:Math.random(),
      text:inputValue,
      completed:false
    }
  addTodo(newTodoItem);
  // console.log(todos);
    setInputValue('')
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={inputValue || ''}
          onChange={handleChange}
          name='todo'
          id="todoInput"
          className="form-control"
          placeholder="Add Todo"
        />
        <div className="d-grid gap-2 py-3">
          <button onClick={handleSubmit} className="btn btn-primary" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
