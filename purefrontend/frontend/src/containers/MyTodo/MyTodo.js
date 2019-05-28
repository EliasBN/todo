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
      todoItems: [],
      pendingItem: ""
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

  async handleDelete(index) {
    this.state.todoItems.splice(index, 1);
    this.setState({ todoItems: this.state.todoItems });
  }

  async handleAdd(event) {
    event.preventDefault();
    const value = this.state.todoItems;
    this.setState({
      todoItems: [{name: this.state.textInput,}, ...value],
      textInput: ""
    })
  }

  async handleEdit(event) {
    event.preventDefault();
    const value = this.state.todoItems;
    this.setState({
      todoItems: [{name: this.state.textEdit,}, ...value],
      textEdit: ""
    })
  
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
          handleEdit={this.handleEdit}
          onChange={this.onEdit}
          value={this.state.textEdit}
          title="+"
        />
      </div>
    );
  }
}
