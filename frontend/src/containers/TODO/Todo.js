import React, { Component } from "react";
import InputForm from "./components/InputForm";
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
    this.handleDelete = this.handleDelete.bind(this);
  }

  onChange(event) {
    this.setState({ textInput: event.target.value });
  }

  handleDelete(index) {
    this.setState(({ todos }) => {
      const nTodos = [...todos];
      nTodos.splice(index, 1);
      return { todos: nTodos };
    });
  }

  submitTodo(event) {
    event.preventDefault();
    const value = this.state.textInput;

    this.setState({
      todos: [...this.state.todos, value],
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
