import React, { Component } from "react";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Buy grouceries",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Clean garage",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Do the laundry",
        completed: false
      }
    ]
  };

  // Toggle Complete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  deleteTodo = id => {
    // console.log(id);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add Todo
  addTodo = title => {
    // console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
