import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';


function App(){

  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");  
  console.log(todo);
  
  const changeTodo = (e) => {
    setItem(e.target.value);
  };

  const clickTodo = () => {
    let newArr = todo.slice()
    newArr.push(item)
    setTodo(newArr)
    console.log(newArr);
  };
  return (
    <div className="todo">
      <div>
        <h1>ToDo</h1>
      </div>
      <div className= "list">
      <ul></ul>
      </div>
      <div className="App">
        <Todo todoL={todo} setTodo={setTodo}/>
        <h2> What needs to be done </h2>
        <input type="text" onChange={changeTodo} />
        <input type="submit" onClick={clickTodo} inputvalue={todo}/>
      </div>
    </div>
  );
}

export default App;


// const [celsius, setCelsius] = useState("");
// const [fahrenheit, setFahrenheit] = useState("");

// const changeCelsius = (e) => {
//     //(9.0/5.0)*celsius + 32;
//     let calcF = (9.0/5.0)*e.target.value + 32;
//     calcF = calcF.toFixed(1)
//   setCelsius(e.target.value);
//   setFahrenheit(calcF);
// };
// const changeFahrenheit = (e) => {
//   //(5.0/9.0)*(fahrenheit - 32);
//   let calcC = (5.0/9.0)*(e.target.value - 32);
//   calcC = calcC.toFixed(1)
//   setCelsius(calcC);
//   setFahrenheit(e.target.value);
// };

// return (
//   <div className="App">
//     <p> Enter temperature in Celsius: </p>
//     <input type="text" onChange={changeCelsius} value={celsius}/>
//     <p> Enter temperature in Fahrenheit:</p>
//     <input type="text" onChange={changeFahrenheit} value={fahrenheit}/>
//   </div>
// );
