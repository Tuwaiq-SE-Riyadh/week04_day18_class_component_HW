import React, { useState } from 'react';
import './App.css';

function App() {
  const List = [];
  const [list, setList] = useState(List);
  const [name, setName] = useState('');
  const [count, setcount] = useState(0);

  const InputName = (e) =>{
    setName(e.target.value);
  }

  const handleAdd = () =>{
    const newList = list.concat({name , count});
    console.log(newList);
    setList(newList);
  }

  return (
    <div className="App">
      <h1>ToDo</h1><br/>

      <ul>
        {list.map((item) => (
          <li id={item.name}>{item.name}  <button onClick={()=> document.getElementById(item.name).remove()}>delete</button>    
          <button onClick={()=> setcount(++item.count)}>+</button> {item.count} <button onClick={()=> setcount(--item.count)}>-</button></li>
        ))}
      </ul>

      <h2>What needs to be done</h2>
      <input type="text" onChange={InputName}/><button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
