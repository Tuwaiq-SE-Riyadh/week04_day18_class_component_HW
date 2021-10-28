import { useState } from "react"
import List from "./List";

function ListItem({ elements }) {
            const [count, setCount] = useState(0);

            const inc = () => {
                setCount(count + 1)

            }

            const dec = () => {
                setCount(count - 1)
            }

            const deleteListItem = (e) => {
                SetList((List) => {
                    const newaArray = List.slice()
                    return newaArray.filter((Element, index) => {
                        return element.text !== text && element.List !== List
                    })
                }
            }
           
            return (
                <div>
                    <li>
                        {elements}
                    </li>

                    <button onClick={deleteListItem}>X</button>
                    <button onClick={inc}>+1</button>
                    <button onClick={dec}>-1</button>
                    {count}

                </div>
            )

        }
export default ListItem









