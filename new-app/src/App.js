import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [number, setNumber] = useState()
  const [text, setText] = useState()
  const [list, setList] = useState([
    { number: 10, text: "abcd" },
    { number: 20, text: "abcd" },
    { number: 30, text: "abcd" }
  ]);
 

  const addItem = (e) => {
    const item = { number, text };
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
    <div className="form">
      <List list={list} setList={setList}/>
      <div className="add">
        <input type="number"  onChange={changeNumber} />
        <input type="text"  onChange={changeText} />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export default App;
