import React from "react";
import "./App.css";
import { useState} from "react";
import './App.css';
import './Todo';



function  Removelist (){
 



}
function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <button variant="outline-success" onClick={() => markTodo(index)}>✓</button>{' '}
        <button variant="outline-danger" onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
    <form onSubmit={handleSubmit}> 
    <form>
      <h1>Add Tod</h1>
      <input type="text"  value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </form>
    <button  type="submit">
      Submit
    </button>
  </form>
  </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Eat",
      isDone: false
    },
    {
      text: "code",
      isDone: false
    },
    {
      text: "sleap",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
          
              
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
            
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;