import logo from './logo.svg';
import './App.css';
import ToDo from "./components/ToDo"
import { useState } from 'react';

function App() {
  const [tasks , setTasks] = useState([]);
  const [myValue, setmyValue] =useState("")
  // let task = tasks.map((element,index) => {
  //   return <li>{element.name} <button onClick={deleteTask}>Delete</button></li>
  // });


  function change(e) {
    setmyValue(e.target.value)
    console.log(myValue)
    }

  const addTask = (e) => {
    let newTasks = tasks.slice();
    newTasks.push({name: myValue});
    setTasks(newTasks);
  }

    // function deleteTask() {
    // let mytasks = tasks.slice();
    // console.log(mytasks)
    // }

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div>
          <ul>
            <ToDo names={tasks} setTasks={setTasks} />
          </ul>
      </div>
      <h2>What needs to be done</h2>
      <input onChange={change}></input>
      <button type="button" onClick={addTask} >add</button>
      
      

    </div>
  );
}

export default App;
