import React, { Component } from "react";
import Todo from "./Todo";
import TextArea from "../components/TextArea";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return <div />;
  }
}

export default TodoItem;
