import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);

  const addItem = (e) => {
    const item = { task };
    const array = list.slice();
    array.push(item);
    setList(array);
  };

  const changeTask = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  return (
    <div>
      <h1>DOTO</h1>
      <List list={list} setList={setList} />
      <h2>What neads to be done</h2>
      <input type="text" onChange={changeTask} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
