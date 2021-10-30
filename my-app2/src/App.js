import './App.css';
import {useState} from 'react'
import List from './Components/List';
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
      <div> 
          
          <h1>ToDo</h1>
          <h3>What needs to be done:</h3>
       <List list={list} setList={setList}/>
        <input type="text" onChange={changeText} />
        <button onClick={addItem}>Add</button>
      </div>
    );
  
}

export default App;
