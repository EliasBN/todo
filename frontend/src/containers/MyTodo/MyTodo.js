import React, { Component } from "react";
import axios from "axios";
import MyTodoList from "./components/MyTodoList";
import InputForm from "../TODO/components/InputForm";

export default class MyTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      textEdit: "",
      todoItems: []
    };
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  async componentDidMount() {
    const { data: todoItems } = await axios.get(
      `/api/todos/${this.props.match.params.id}/todoItems`
    );
    this.setState({ todoItems });
  }

  onChange(event) {
    this.setState({ textInput: event.target.value });
  }

  onEdit(event) {
    this.setState({ textEdit: event.target.value });
  }

  async handleDelete(id) {
    await axios.delete(`/api/todos/${this.props.match.params.id}/items/${id}`);
    let todoListCopy = this.state.todoItems;
    for (let i = 0; i < todoListCopy.length; i++) {
      let todo = todoListCopy[i];
      if (todo.id === id) {
        todoListCopy.splice(i, 1);
        break;
      }
    }
    this.setState({ todoItems: todoListCopy });
  }

  async handleAdd() {
    const obj = { content: this.state.textInput };
    const { data: todo } = await axios.post(
      `/api/todos/${this.props.match.params.id}/items`,
      obj
    );
    const currentState = this.state.todoItems;
    this.setState({ todoItems: currentState.concat(todo), textInput: "" });
  }

  async handleEdit(id) {
    console.log(id);
    let content = this.state.textEdit;
    const { data } = await axios.put(
      `/api/todos/${this.props.match.params.id}/items/${id}`,
      content
    );
    const currentState = [...this.state.todoItems];
    const index = currentState.indexOf(content);
    currentState[index] = content;
    this.setState({ currentState });
  }

  render() {
    return (
      <div class="container">
        <InputForm
          onSubmit={this.handleAdd}
          onChange={this.onChange}
          value={this.state.textInput}
          title="+"
        />
        <MyTodoList
          list={this.state.todoItems}
          handleDelete={this.handleDelete}
          inputForm={
            <InputForm
              onSubmit={this.handleEdit}
              onChange={this.onEdit}
              value={this.state.textEdit}
              title="+"
            />
          }
        />
      </div>
    );
  }
}
