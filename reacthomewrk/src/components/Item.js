import { useState } from "react";
function Item({item, setTodo,index}) {
    const [count,setCount]=useState(0)
    const increace = () =>{
        setCount(count+1)
    }
    const decrese = () =>{
        setCount(count-1)
    }

    const deleteB = (e) => {
        setTodo((list) => {
          // const newArray = list.slice()
          // return newArray.filter((element, i)=>{
          //   return index !== i
          // })
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
    return(
        <div className="item">
            <li>{item}</li>
            <input type="submit" value="delete" onClick={deleteB}/>
            <div className="count">
                <input type="submit" value="+" onClick={increace}/>
                <p>{count}</p>
                <input type="submit" value="-" onClick={decrese}/>
            </div>
        </div>
    )
}



export default Item;