import React,{useContext} from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import todoContext from '../context/todo-context/todo-context'
const TodoList = () => {
    const {todos,toggleToTodo,deleteTodo} = useContext(todoContext)
    console.log(todos)
    return (
        <div className='container'>
            <TodoInput />
            {todos.map(todo =>   (<TodoItem key={todo.id} text={todo.text} toggleButton={toggleToTodo} deleteButton={deleteTodo} id={todo.id} complete={todo.completed}/>))}
         
        </div>
    )
}

export default TodoList
