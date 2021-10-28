import ListItem from "./ListItem"
import { useState } from "react";

function List() {
    let text

    const [list, setList] = useState([]);
const f =list.map((element,index)=>{
    // return <li>{element}</li>
return <ListItem elements={element} index={index}/>
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
            <h2>what needs to be done</h2>
            <input type="text" onChange={changeText} />
            <button onClick={addItem}>Add</button>
            {f}
        </div>


    )
}
export default List




