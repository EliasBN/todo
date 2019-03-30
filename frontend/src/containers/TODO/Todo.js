import React, { Component } from "react";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import TodoList from "./components/TodoList";

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
    this.setState({
      todos: [
        {
          name: this.state.textInput
        },
        ...this.state.todos
      ],
      textInput: ""
    });
  }

  render() {
    return (
      <div>
        <div class="container">
          <form onSubmit={this.submitTodo}>
            <TextArea onChange={this.onChange} value={this.state.textInput} />
            <Button title="Add Todo" />
          </form>

          <TodoList list={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default Todo;
