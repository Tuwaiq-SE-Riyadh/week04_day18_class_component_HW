import { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);
  function increse() {
    let newCounter = count;
    newCounter++;
    setCount(newCounter);
  }
  function decrease() {
    // let newCounter = count;
    // newCounter--;
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increse}>+</button>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default Count;
