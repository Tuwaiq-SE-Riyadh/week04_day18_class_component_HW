import { useState } from "react";

function ListItem({  text, setList, index }) {
  const [count, setCount] = useState(0);

  const deleteListItem = (e) => {
    setList((list) => {
      const newArray = [];
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (index !== i) {
          newArray.push(element);
        }
      }
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
        <button onClick={deleteListItem}>X</button>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
      </div>
    </>
  );
}

export default ListItem;