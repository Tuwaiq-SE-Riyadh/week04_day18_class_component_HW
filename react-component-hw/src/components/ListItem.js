import { useState } from "react";

function ListItem({ number, text, setList, index }) {
  const [count, setCount] = useState(0);
  // console.log(setList);
  const deleteListItem = (e) => {
    console.log(setList);
    setList((list) => {
      console.log(setList);
      const newArray = list.slice()
      return newArray.filter((element, i)=>{
        return index !== i
      })
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
      <div className="forPadding">
        <p> {number}</p>
        <p> {text}</p>
        <p> {count}</p>
        <button onClick={deleteListItem}>Delete Task</button>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
      </div>
    </>
  );
}

export default ListItem;
