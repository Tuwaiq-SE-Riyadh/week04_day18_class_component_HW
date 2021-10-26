import React, { useState } from 'react';
import './App.css';

function App() {
  const List = [];
  const [list, setList] = useState(List);
  const [name, setName] = useState('');
  const [co, setco] = useState(0);

  let id = 0;
  // let count = 0;


  const InputName = (e) =>{
    setName(e.target.value);
  }

  const handleAdd = () =>{
    const newList = list.concat({id , name , co});
    id++;
    setList(newList);

  }

  const deleting = () =>{
    // const newList = list.remove({ name });
    // setList(newList);
    document.getElementById(id).remove();


  }

  return (
    <div className="App">
      <h1>ToDo</h1><br/>

      <ul>
        {list.map((item) => (
          <li id={item.id}>{item.name}  <button onClick={deleting}>delete</button>    
          <button onClick={()=> setco(++item.co)}>+</button> {item.co} <button onClick={()=> setco(--item.co)}>-</button></li>
        ))}
      </ul>

      <h2>What needs to be done</h2>
      <input type="text" onChange={InputName} value={name} /><button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
