import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [text, setText] = useState()
  const [list, setList] = useState([]);
 
  const addItem = (e) => {
    const item = { text };
    const array = list.slice()
    array.push(item);
    setList(array)
  };

  const changeText = (e) => {
    const value = e.target.value;
    setText(value)
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <h2>What needs to be done</h2>
      <input type="text" onChange={changeText} />
      <button onClick={addItem}>Add</button>
      <br/>
      <br/>
      <br/>
      <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
