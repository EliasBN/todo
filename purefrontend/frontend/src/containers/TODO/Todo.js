import React, { Component } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import axios from "axios";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      textEdit: "",
      todos: [],
      pendingItem: ""
    };

    this.onEdit = this.onEdit.bind(this);
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
  onEdit(event) {
    this.setState({ textEdit: event.target.value });
  }

   handleDelete(index) {
    this.state.todos.splice(index, 1);
    this.setState({ todos: this.state.todos });
  }

  
  async handleAdd(event) {
    event.preventDefault();
    const value = this.state.todos;
    this.setState({
      todos: [{name: this.state.textInput,}, ...value],
      textInput: ""
    })
  }

  async handleEdit(id) {
    let obj = { title: this.state.textEdit };
    const { data: todo } = await axios.put(`/api/todos/${id}`, obj);
    const currentState = this.state.todos;
    this.setState({ todos: currentState.concat(todo), textEdit: "" });
  }

  async chooseList(id) {
    this.props.history.push(`/todos/${id}/todoItems`);
  }

  render() {
    return (
      <div class="container">
        <InputForm
          onSubmit={this.handleAdd}
          onChange={this.onChange}
          value={this.state.textInput}
          title="+"
          label="Test"
        />

        <TodoList
          list={this.state.todos}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          chooseList={this.chooseList}
          onChange={this.onEdit}
          value={this.state.textEdit}
        />
      </div>
    );
  }
}
