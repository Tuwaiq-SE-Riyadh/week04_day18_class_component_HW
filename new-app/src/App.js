import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {

  const [text, setText] = useState()
  const [list, setList] = useState([
    {  text: "Eat" },
    {  text: "Cpde" },
    {  text: "Sleep" }
  ]);
 

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
    <div className="form">
      <List list={list} setList={setList}/>
      <div className="add">
        <lable> What needs to do done</lable>
        <input type="text"  onChange={changeText} />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export default App;
