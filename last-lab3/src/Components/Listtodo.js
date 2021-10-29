import React from 'react';
import { useState } from "react";
import "./Lissttdo.css"
function Listtodo({ name, remove, index }) {
    const [count, setCount] = useState(0);

    const increment = (e) => {
        e.preventDefault();
        setCount(count + 1)
    };
    const decrement = (e) => {
        e.preventDefault();
        setCount(count - 1)
    };
    const dele = () => {
        remove(index)

    }

    return (
        <div className="item">
            <li>
                <p> {name}</p>
            </li>
            <form className="del">
                <button onClick={dele}>Delete</button>
              
                <div>
                <button onClick={increment}>+</button>
                
                <p>{count}</p>
                
                <button onClick={decrement}>-</button>
                </div>
            </form>
        </div>

    )


}

export default Listtodo;







