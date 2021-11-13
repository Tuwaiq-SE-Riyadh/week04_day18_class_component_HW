import { render } from "@testing-library/react";
import { useState } from "react";
import List from "./List";

function ListItem({ Elements }) {
            const [count, setCount] = useState(0);

            const inc = () => {
                setCount(count + 1)

            }

            const dec = () => {
                setCount(count - 1)
            }

            function deleteListItem(e) {
             const SetList=((List) => {
                     const newaArray = List.slice()
                     return newaArray.filter((element, index) => {
                         return element.Text ==Text &&element.List == List;
                     });
                 })
    }         
           render();
            return (
                <div>
                   
                
                    <button onClick={deleteListItem}>delete</button>
                    <button onClick={inc}>+1</button>
                    <button onClick={dec}>-1</button>
                    {count}

                </div>
            );
            }
        
export default ListItem;








