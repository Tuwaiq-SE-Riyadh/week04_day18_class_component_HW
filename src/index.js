import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import List from "./list";
import Count from "./Count";
import reportWebVitals from "./reportWebVitals";

function ToDo(props) {
  let [list, setList] = useState([]);

  function PushToList() {
    let activity = document.getElementById("actv");
    const newArray = list.slice();
    console.log(activity.value);
    newArray.push(activity.value);
    setList(newArray);
    console.log(list);
  }
  function dltindex() {
    let array = list.splice(props.idToDlt, 1);
    array = list.slice();
    console.log(array);
    setList(array);
  }
  let a = list.map((element, index) => {
    return (
      <>
        <List list={element} />
        <button className="delete-btn" onClick={dltindex} value={index}>
          delete
        </button>
        <Count />
      </>
    );
  });
  return (
    <>
      <div className="test">
        <div>
          <input id="actv" type="text" />
          <button onClick={PushToList}>add</button>
        </div>
        <div className="row">{a}</div>
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ToDo name="Sara" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
