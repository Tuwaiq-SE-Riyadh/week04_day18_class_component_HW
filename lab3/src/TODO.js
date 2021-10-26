import { useState, useEffect } from "react";
import R from 'react'
import './App.css';


class To_do extends R.Component{
  constructor(props){
    super(props);
    this.state = {list: props.list };
    }


    add= ()=> {
      const list = this.state.list;
      let text = document.querySelector(".t").value;
      let id = list.length;
      let count = 0;
      let t = {text , id, count}
      list.push(t);
      this.setState({list});
  }




    render() {


      return (
      <>
      <h1>TODO</h1>
      

      
        {this.state.list.map(function(e, index){
          
            return(
              <ul key={index} id={index}>
                <li>
                  {e.text}<button type="button" className="b1" onClick={() =>{
                    document.getElementById(index).remove();
                  }}>Delete</button>

                  <br/>
<button type="button" className="b1" onClick={() =>{e.count+=1; 
this.setState({ state: this.state });} }>+</button>
<p>{e.count}</p>
<button type="button" className="b1" onClick={() =>{e.count-=1; this.setState({ state: this.state });}}>-</button>
<hr/>
                </li>
              </ul>)
                }, this)
                

                }



        <p>What needs to be done?</p>
        <input type="text" className="t"/>
        <button type="button" onClick={this.add} >Add</button>
      </>

        );
    }

}

  


  export default To_do;
  