import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Calculator /> */}
        <ToDo />
        <List />
      </header>
    </div>
  );
}
function Calculator() {
  let [temp, settemp] = useState(1);
  let [fehrTemp, setfehrTemp] = useState(33);

  function changeTemp(e) {
    fehrTemp = e.target.value * 2 + 32;
    setfehrTemp(fehrTemp);
    settemp(e.target.value);
  }
  function changeFehrTemp(e) {
    temp = (e.target.value - 32) / 2;
    setfehrTemp(e.target.value);
    settemp(temp);
  }
  return (
    <div>
      <div>
        <label for="Celsius"> Celsius</label>
        <br />
        <input type="number" onChange={changeTemp} value={temp}></input>
      </div>
      <div>
        <label for="Fahrenheit"> Fahrenheit </label>
        <br />
        <input type="number" onChange={changeFehrTemp} value={fehrTemp}></input>
      </div>
    </div>
  );
}
function ToDo() {
  let [a, seta] = useState([]);
  // let list = []
  let [list, setList] = useState([]);
  // const list = [];
  function PushToList() {
    let activity = document.getElementById("actv");

    const newArray = list.slice();
    console.log(activity.value);
    newArray.push(activity.value);
    setList(newArray);
    console.log(list);
    // seta(
    //   (a = list.map((element) => {
    //     console.log("here is",element);
    //     <ul>
    //       <li>{element}</li>
    //     </ul>;
    //   }))
    // );

    // display(list);
  }
  // function display(list) {
  //   const li = document.createElement("li");
  //   const ul = document.querySelector("ul");

  //   for (let index = 0; index < list.length; index++) {
  //     li.innerText = list[index];
  //     ul.append(li);
  //   }
  // }

  return (
    <div>
      <div>
        <h3>What need to be done?</h3>
      </div>

      <div>
        <input id="actv" type="text" />
        <button onClick={PushToList}>add</button>
      </div>

      <div>
        {/* <ul>
          {list.map((e) => {
            return <List list={list} />;
          })}
        </ul> */}
      </div>
      <div>
        <List list={list} />
      </div>
      <div></div>
    </div>
  );
}

function List(prop) {
  console.log(prop.list);
  let list = prop.list;
  let newList = [];
  console.log("new list", list, typeof list);
  if (list) {
    newList = list.map((e) => {
      return { e };
    });
  }

  return <>{newList}</>;
}
export default App;
