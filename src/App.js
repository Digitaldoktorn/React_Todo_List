import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import About from "./components/pages/About";
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
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br></br>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <br></br>
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                  />
                  <br></br>
                  <br></br>
                  <AddTodo addTodo={this.addTodo} />
                  <br></br>
                  <br></br>
                </React.Fragment>
              )}
            />
            <br></br>
            <Route path="/about" component={About} />
            <br></br>
            <br></br>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
