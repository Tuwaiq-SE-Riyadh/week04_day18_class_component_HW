import React from 'react';

class ToDo extends React.Component {
  state = {
    todos: [],
    input: '',
  };

  addTodoCount = (title) => {
    const todoIndex = this.state.todos.findIndex(
      (todo) => todo.title === title,
    );

    const todos = [...this.state.todos];

    todos[todoIndex] = {
      title: todos[todoIndex].title,
      count: todos[todoIndex].count + 1,
    };

    this.setState({ todos });
  };

  subtractTodoCount = (title) => {
    const todoIndex = this.state.todos.findIndex(
      (todo) => todo.title === title,
    );

    const todos = [...this.state.todos];

    todos[todoIndex] = {
      title: todos[todoIndex].title,
      count: todos[todoIndex].count - 1,
    };

    this.setState({ todos });
  };

  updateInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { title: this.state.input, count: 1 }],
    });
  };

  deleteTodo = (title) => {
    const todos = this.state.todos.filter((todo) => todo.title !== title);

    this.setState({ todos });
  };

  render() {
    return (
      <React.Fragment>
        <main style={{ display: 'flex' }}>
          <ul style={{ width: 'fit-content', margin: '0 auto' }}>
            {this.state.todos.map((todo) => (
              <li key={todo} style={{ display: 'flex', alignItems: 'center' }}>
                {todo.title}
                <button
                  style={{ marginLeft: 20 }}
                  onClick={() => this.deleteTodo(todo.title)}>
                  Delete
                </button>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 20,
                  }}>
                  <button
                    style={{ marginBottom: 10 }}
                    onClick={() => this.addTodoCount(todo.title)}>
                    +
                  </button>
                  <div style={{ marginBottom: 10 }}>{todo.count}</div>
                  <button
                    style={{ marginBottom: 10 }}
                    onClick={() => this.subtractTodoCount(todo.title)}>
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>

        <footer>
          <h3>What needs to be done</h3>
          <div>
            <input
              type='text'
              value={this.state.input}
              onChange={this.updateInput}
            />
            <button onClick={this.addTodo}>Add</button>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default ToDo;
