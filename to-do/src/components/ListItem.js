import { useState } from "react";

function ListItem({ task, setList, index }) {
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
    setCount(count + 1);
  };
  const dec = (e) => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="cd">
        <p> {task}</p>
        <button onClick={deleteListItem}>Delete</button>
        <br></br>
        <button onClick={inc}>+</button>

        <p> {count}</p>
        <button onClick={dec}>-</button>
      </div>
    </>
  );
}

export default ListItem;
