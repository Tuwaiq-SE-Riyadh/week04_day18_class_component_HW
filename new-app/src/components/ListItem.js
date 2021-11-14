import { useState } from "react";

function ListItem({ number, text, setList, index }) {
  const [count, setCount] = useState(0);

  const deleteListItem = (e) => {
    setList((list) => {

      const newArray = list.slice()
      return newArray.filter((element, i)=>{
        console.log("element" + element);
        console.log("index" + index);
        console.log("i" + i);
        return index !== i
      })
      return newArray;
    });
  };

  const inc = (e) => {
    setCount(count + 1)
  };
  const dec = (e) => {
    setCount(count - 1)
  };

  return (
    <>
      <div className="flex">
        <p> {text}</p>
        <p> {count}</p>
        <button onClick={deleteListItem}>Delete</button>
        <button onClick={inc}> + </button>
        <button onClick={dec}> - </button>
      </div>
    </>
  );
}

export default ListItem;
