import { useState } from "react";
function ListItem({ text1, setList, index ,element}) {

  const [count, setCount] = useState(0);

  const deleteListItem = (e) => {
    setList((list)=>{
        const newArray=list.slice()
        return newArray.filter((element ,i)=>{
            return index!==i
        })
    })
      
    }

  const inc = (e) => {
    setCount(count + 1)
  };
  const dec = (e) => {
    setCount(count - 1)
  };

  return (
    <>
      <div className="#">
        <p> {element}</p>
        <p> {count}</p>
        <button onClick={deleteListItem}>X</button>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
      </div>
    </>
  );
}

export default ListItem;
