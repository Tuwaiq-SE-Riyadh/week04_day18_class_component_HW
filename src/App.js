import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  // const [number, setNumber] = useState()
  const [text, setText] = useState()
  const [list, setList] = useState([]);
 

  const addItem = (e) => {
    const item = {  text };
    const array = list.slice()
    array.push(item);
    setList(array)
  };

  function changeText(e) {
    const value = e.target.value;
    setText(value);
  }



  return (
    <div >
      <List list={list} setList={setList}/>
      <input type="text" onChange={changeText} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
