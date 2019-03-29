import React, { Component } from "react";

import TodoItem from "./containers/TodoItem";
import Todo from "./containers/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
