import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [number, setNumber] = useState()
  const [text, setText] = useState()
  const [list, setList] = useState([]);
 



  const addItem = (e) => {
    const item = { number, text };
    // const item = {number:number, text:text}
    const array = list.slice()
    array.push(item);
    setList(array)
  };

  const changeText = (e) => {
    const value = e.target.value;
    setText(value)
  };

  const changeNumber = (e) => {
    const value = e.target.value;
    setNumber(value)
  };

  return (
    <div className="page">
      <h1> To Do List </h1>
      <h2> What needs to be done</h2>
      <List list={list} setList={setList}/>
      {/* <input type="number" onChange={changeNumber} /> */}
      <input type="text" onChange={changeText} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
