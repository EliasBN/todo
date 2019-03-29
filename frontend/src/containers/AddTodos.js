import React, { Component } from "react";

export default class AddTodos extends Component {
  state = {
    textInput: ""
  };

  onSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.textInput);
    this.setState({ textInput: "" });
  }

  onChange(event) {
    this.setState({ textInput: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextArea onChange={this.onChange} value={this.state.textInput} />
          <Button title="Add Todo" />
        </form>
      </div>
    );
  }
}

AddTodo.PropTypes = {
  addTodo: PropTypes.func.isRequired
};
