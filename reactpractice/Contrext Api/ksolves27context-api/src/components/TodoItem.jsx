import React from "react";

const TodoItem = ({text,toggleButton,id,deleteButton,complete}) => {
  
  return (
    <div className="container py-3 my-3" style={{ backgroundColor: complete ? "green" : "#8CA1A5" }}>
      <h1>{text}</h1>
      <button onClick={()=>toggleButton(id)}  className="btn btn-sm  btn-primary">Toggle</button>
      <button onClick={()=>deleteButton(id)} className="btn btn-sm mx-3 btn-danger">Delete</button>
    </div>
  );
};

export default TodoItem;
