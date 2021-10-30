import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [text, setText] = useState()
  const [list, setList] = useState([
    { text: "First Todo" },
  ]);



  const addItem = (e) => {
    const item = { text };
    // const item = { text:text}
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
      <List list={list} setList={setList}/>
      <input type="text" onChange={changeText} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
