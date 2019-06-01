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

  async sortItems() {
    const myData = this.state.todoItems.sort(function(a, b) {
        if (a.item.toLowerCase() > b.item.toLowerCase()) return -1;
        if (a.item.toLowerCase() < b.item.toLowerCase()) return 1;
        return 0;
      })
      .map(item => <div key={item.key}>{item.content}</div>);

    this.setState({ todoItems: myData });
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
        <button onClick={this.sortItems}>sort</button>

      </div>
    );
  }
}
