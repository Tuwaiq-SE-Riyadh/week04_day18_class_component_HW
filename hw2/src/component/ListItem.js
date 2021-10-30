import { useState } from 'react';
import './List.css'
function ListItem({list, setList,index}){

    console.log(list+"in list tiifdvgv");

    console.log("sfdssafsadfs");
    
    const [count, setCount] = useState(1);

    const deleteListItem = (e) => {
        setList((list) => {
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
     <div className="flex">
       <li>{list}   
       <button className="btnDelete" onClick={deleteListItem}>Delete</button>
        <button className="btnInc" onClick={inc}>+</button><br/>
        <p className="count"> {count}</p>
        <button className="btnDec"onClick={dec}>-</button>
        </li>
      </div>
    </>
)


}

export default ListItem;
