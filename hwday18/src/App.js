import { plugins } from "pretty-format";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [list, setItem] = useState([]);
  const [buttons, setBut] = useState([]);
  let item;
  const [plus, setPlus] = useState(1);
  const [counter, setCounter] = useState(1);
   

   function pluse(e){
  
    buttons.map((ele,index)=>{
      if(e.target.id==ele.id){
        // buttons[index].cunt=ele.cunt+1
        let newbuttons=buttons.slice()
        newbuttons[index].cunt=ele.cunt+1
        console.log("in side if")
        return setBut(newbuttons)
      }
      
    })

    console.log(buttons)
    
   }
   function minse(e){
    
    buttons.map((ele,index)=>{
      if(e.target.id==ele.id){
        // buttons[index].cunt=ele.cunt+1
        let newbuttons=buttons.slice()
        newbuttons[index].cunt=ele.cunt-1
        console.log("in side if")
        return setBut(newbuttons)
      }
      
    })

    console.log(buttons)
    

   }
  function todo(e){
   const array = list.slice()
   array.push(item)
   setItem(array)
   


  //  

  setCounter(counter+1)
  let but={
    id:counter,
    cunt:1
  }
  const array2 = buttons.slice()
  array2.push(but)
  setBut(array2)
  console.log(buttons)



  // 
  
  }
  function change(e){
    item=e.target.value
  }
  function delet(e){
    const array = list.slice()
    array.splice(e.target.id,1)
    
    setItem(array)
    console.log(list)
  }


  return (
    <div className="main">
      <h2>ToDo</h2>
      
      <div id="output">
        {list.map((elem,index)=>{
          let c=1;
          return <li>{elem}<button id={index} onClick={delet}>Delet</button>
          <button id={index+1} onClick={pluse} >+</button ><button id={index+1} onClick={minse} >-</button ><p>{buttons[index].cunt}</p></li>
        })

        }
      </div>
      
      <h3>what needs to be done</h3>
      <input type="text" onChange={change}></input><button onClick={todo}>add</button>
      
      
    </div>
  );
}

export default App;
