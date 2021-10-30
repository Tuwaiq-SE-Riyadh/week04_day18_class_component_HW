
import './App.css';
import { useState } from 'react';
import List from './component/List'



function App() {
  const [list,setList]=useState([])
const [text,setText]=useState()


  const addItem = (e) => {
    const array = list.slice()
    array.push(text);
    setList(array)
    console.log("in add "+list);
  };



  const changeText = (e) => {
    const value = e.target.value;
    setText(value)
    console.log(value);

  };
  


  return (
    <div className="App">
     <List list={list} setList={setList}/>
    <form>
      <h2>What needs to be done </h2>
      <input type="text" onChange={changeText} />
      <button type="button" onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default App;
