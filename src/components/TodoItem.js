import React, { Component } from "react";

class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      backgroundColor: this.props.todo.completed ? "#e6fee6" : "#f4f4f4",
      marginLeft: this.props.todo.completed ? "4em" : "0em"
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
            style={btnStyle}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  backgroundColor: "#FF0000",
  color: "#FFF",
  float: "right",
  padding: "5px 8px",
  cursor: "pointer"
};

export default TodoItem;
