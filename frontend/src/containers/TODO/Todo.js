import React, { Component } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

window.id = 0;
class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      todos: []
    };

    this.onChange = this.onChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onChange(event) {
    this.setState({ textInput: event.target.value });
  }

  handleDelete(index) {
    this.state.todos.splice(index, 1);
    this.setState({ todos: this.state.todos });
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
          <InputForm
            onSubmit={this.submitTodo}
            onChange={this.onChange}
            value={this.state.textInput}
            title="+"
          />

          <TodoList list={this.state.todos} handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default Todo;
