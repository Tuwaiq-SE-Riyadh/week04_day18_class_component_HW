import { useState } from "react";
import "./App.css";
import List from "./componets/List";

function App() {

  const [list, setList] = useState([]);
 console.log(list);
  let text1;


  const addItem = (e) => {
    const item = text1
    const array = list.slice()
    array.push(item);
    setList(array)
  };

  const changeText = (e) => {
     text1 = e.target.value;
     //console.log(e.target.value);
  };

  

  return (
    <div>
      <h1>TODO</h1>
      <h2>whit do you went to do </h2>
      <List list={list} setList={setList} text1={text1}/>
      <input type="text" onChange={changeText} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
