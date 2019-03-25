import React, { Component } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      todos: []
    };

    this.onChange = this.onChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  onChange(event) {
    this.setState({ textInput: event.target.value });
  }

  submitTodo(event) {
    event.preventDefault();
    this.setState({ todos: [...this.state.todos, this.state.textInput] });
    this.setState({ textInput: "" });
  }

  render() {
    const todos = this.state.todos.map(item => <li>{item}</li>);

    return (
      <div>
        <form onSubmit={this.submitTodo}>
          <TextInput onChange={this.onChange} value={this.state.textInput} />
          <Button title="Bø" />
          {todos}
        </form>
      </div>
    );
  }
}

export default Todo;
