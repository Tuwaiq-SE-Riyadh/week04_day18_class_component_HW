import { useState} from "react";
import './styleTask.css';

function Task({ele, index, arr,setArr}){
   
   const [count, setCount]= useState(0);
    function deleteEle(){
        let newarr = arr.slice();
        newarr.splice(index,1)
        setArr(newarr);
        console.log(newarr);
       }
       function Inc(){
        setCount(count+1);
       }
       function Dec(){
        setCount(count-1);
       }
    return (<div className="flex"><li>{ele}</li><button onClick={deleteEle}>delete</button>
    <div><button onClick={Inc}>+</button><p>{count}</p><button onClick={Dec}>-</button></div>
    </div>);
    
}

export default Task;