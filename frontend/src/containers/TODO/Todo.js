import React, { Component } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import axios from "axios";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      textEdit: "",
      todos: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.chooseList = this.chooseList.bind(this);
  }

  async componentDidMount() {
    const { data: todos } = await axios.get("/api/todos");
    this.setState({ todos });
  }

  onChange(event) {
    this.setState({ textInput: event.target.value });
  }

  async handleDelete(id) {
    await axios.delete(`/api/todos/${id}`);
    let todoListCopy = this.state.todos;
    for (let i = 0; i < todoListCopy.length; i++) {
      let todo = todoListCopy[i];
      if (todo.id === id) {
        todoListCopy.splice(i, 1);
        break;
      }
    }
    this.setState({ todos: todoListCopy });
  }

  async handleAdd() {
    const obj = { title: this.state.textInput };
    const { data: todo } = await axios.post("/api/todos/", obj);
    const currentState = this.state.todos;
    this.setState({ todos: currentState.concat(todo), textInput: "" });
  }

  async handleEdit(id) {
    const todoToEdit = this.state.textEdit;
    const { data } = await axios.put(`/api/todo/${id}/edit`, todoToEdit);
    const currentState = this.state.todos;
    this.setState({ todos: currentState.concat(todoToEdit) });
  }

  async chooseList(id) {
    alert("Test" + id);
  }

  render() {
    return (
      <div>
        <div class="container">
          <InputForm
            onSubmit={this.handleAdd}
            onChange={this.onChange}
            value={this.state.textInput}
            title="+"
          />

          <TodoList
            list={this.state.todos}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            onClick={this.chooseList}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
