import { useState } from "react";

function ToDoList({name,index, setTasks}) {

const [count , setCount] = useState(0);

// this function is to delete tasks
  const deleteTasks = (e) => {
    setTasks((tasks) => {

      const newArray = [];
      for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i];
        if (index !== i) {
          newArray.push(element);
        }
      }
      return newArray;
    });
  };
  

  const inc = (e) => {
    setCount(count + 1)
  };
  const dec = (e) => {
    setCount(count - 1)
  };
    return (
      <>
        <div className= "flex">
            <li>{name}</li>
            <button onClick={deleteTasks}>Delete</button>
            <button onClick={inc}>+1</button>
            <p> {count}</p>
            <button onClick={dec}>-1</button>
        </div> 
      </>
      
    );
  }
  
  export default ToDoList;
 