
import './App.css';
import React   from 'react';
import { useState} from "react";

import Listtodo from "./Components/Listtodo"

function App() {
  const[todo,setTodo]=useState([])

  
    let x;
  function handelinputchange(e){
    x=e.target.value
    console.log(x)
    
    };
    

function add(e){
  e.preventDefault();
  const item={name:x}
  let newArray=todo.slice()
  newArray.push(item)
  setTodo(newArray)
}
  
   function Remove(index){
    let newArray=todo.slice()
    newArray.splice(index,1);
    setTodo(newArray)
   
   }
  
  let y = todo.map((item, index) =>{
  return <Listtodo name={item.name} remove={Remove} index={index} />
   }
   )

return(
  <div classNme="input">

<h1>what to do</h1>
<h2>what needs to be done</h2>
<ul>
{y}
</ul>

<form >
<input onChange={handelinputchange} /> 
<button onClick={add}>Add</button>
</form>

    </div>
  
)
}  
    
export default App;


