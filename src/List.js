import { useState } from "react";
import ListItem from "./ListItem"

function List() {
    let text
    const [list, setList] = useState([]);
    
const f =list.map((element,index)=>{
     return <li>{element}
      <ListItem elements={element} index={index}/></li>

})

    const addItem = (e) => {
        const array = list.slice()
        array.push(text);
        setList(array)
        console.log(array);
    }


    const changeText = (e) => {
        text = e.target.value;
        console.log();
    }


    return (
        <div>
            <h1>to do </h1>
            {f}
           
            <h2>what needs to be done</h2>
            <input type="text" onChange={changeText} />
            <button onClick={addItem}>Add</button>
           
        </div>


    )
}
export default List;



