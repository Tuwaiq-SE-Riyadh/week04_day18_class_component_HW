import { useState} from "react";
import React from "react";
import Task from './componants/Task';


function App() {
  const [arr, setArr] = useState([]);
 
 function change(){
 
   const inp = document.getElementById("in").value;
  let newarr = arr.slice();
  newarr.push(inp)
  setArr(newarr);
  console.log(newarr);

 }

  return(  
    <div>
    <h1>TODO</h1>

  {arr.map((ele,index) => <Task ele ={ele} index={index} arr ={arr} setArr={setArr}/>)}
   <p>what need to be done?</p>
  <input id="in"></input>
  <button onClick={change}>Add</button>
   </div>
  );
 
 
}






export default App;

