import React, { Component } from 'react';
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import './App.css';

class App extends Component {
  state = {
    newTask: "",
    todos: [
     
    ]
  }

  deleteTask = (index) => {
    const todos = [...this.state.todos];
    
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  updateNewTask = (event)=>{
    this.setState({
      newTask: event.target.value
    });
  }

  addTask = ()=>{
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask
    });
    this.setState({
      todos,
      newTask: ''
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo</h1>
        {this.state.todos.map((todo, index) => 
          <Task todo={todo} deleteTask={()=>this.deleteTask(index)} key={index} />
        )}

        <CreateTask value={this.state.newTask} 
          onChange={this.updateNewTask} 
          addTask={this.addTask} />
      </div>
    );
  }
}

export default App;