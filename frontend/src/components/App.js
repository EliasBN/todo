import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
import axios from "axios";

// Import components
import List from "./List";
import InputForm from "./InputForm";
import Header from "./Header";

class App extends Component {
  state = {
    todo: [],
    todoItem: [],
    pendingItem: ""
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios.get("api/todos").then(res => {
      const todo = res.data;
      this.setState({ todo });
    });
  };

  postTodo = () => {
    axios
      .post("/api/todos", {
        id: 5,
        content: "Hei alle sammen dette er fra react"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  lastItemId = 0;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  // Flips isEditing bool
  toggleIsEditingAt = id => {
    console.log("isEditingAt", id);
    this.setState({
      todo: this.state.todo.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isEditing: !item["isEditing"]
          };
        }
        return item;
      })
    });
  };

  removeItemAt = id => {
    this.setState({ todo: this.state.todo.filter(item => id !== item.id) });
  };

  handleItemInput = e => this.setState({ pendingItem: e.target.value });

  // handle editing items
  setNameAt = (name, id) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (id === item.id) {
          return {
            ...item,
            name
          };
        }
        return item;
      })
    });
  };

  newItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.newItemId();
    this.setState({
      todo: [
        {
          name: this.state.pendingItem,
          isEditing: false,
          id
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  render() {
    const todo = this.state.todo.map(val => {
      return <h1>{val.title}</h1>;
    });

    return (
      <div className="wrapper">
        <Header />
        <InputForm
          newItemSubmitHandler={this.newItemSubmitHandler}
          handleItemInput={this.handleItemInput}
          pendingItem={this.state.pendingItem}
        />

        <List
          todo={this.state.todo}
          removeItemAt={this.removeItemAt}
          toggleIsEditingAt={this.toggleIsEditingAt}
          setNameAt={this.setNameAt}
        />
        {todo}
      </div>
    );
  }
}

export default App;
