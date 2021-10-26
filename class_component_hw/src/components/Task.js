import React from 'react';

function Task(props){
  const todo = props.todo;
  const deleteTask = props.deleteTask;

  return (<li>
    {todo.text} 
    <button className="butDelete" onClick={deleteTask}>
      Delete
    </button>
  </li>);
}

export default Task;