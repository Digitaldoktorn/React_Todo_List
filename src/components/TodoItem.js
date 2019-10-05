import React, { Component } from "react";

class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      backgroundColor: this.props.todo.completed
        ? "rgb(170, 252, 168, 0.3"
        : "#fff",
      width: "80%",
      margin: "0 auto",
      border: "none",
      borderRadius: "5px",
      marginBottom: "2px"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            className="delBtn"
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
