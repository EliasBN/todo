import React, { Component } from "react";
import Todo from "../containers/Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default TodoList;
