import React, { useState } from 'react';
import './App.css';

function App() {
  const List = [];
  const [list, setList] = useState(List);
  const [name, setName] = useState('');
  const [count, setcount] = useState(0);
  let id = 0;

  const InputName = (e) =>{
    setName(e.target.value);
  }

  const handleAdd = () =>{
    const newList = list.concat({id , name , count});
    id++;
    setList(newList);
  }

  const deleting = () =>{
    document.getElementById(id).remove();
  }

  return (
    <div className="App">
      <h1>ToDo</h1><br/>

      <ul>
        {list.map((item) => (
          <li id={item.id}>{item.name}  <button onClick={deleting}>delete</button>    
          <button onClick={()=> setcount(++item.count)}>+</button> {item.count} <button onClick={()=> setcount(--item.count)}>-</button></li>
        ))}
      </ul>

      <h2>What needs to be done</h2>
      <input type="text" onChange={InputName} value={name} /><button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
