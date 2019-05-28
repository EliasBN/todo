import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./containers/TODO/Todo";
import MyTodo from "./containers/MyTodo/MyTodo";
import Notfound from "./components/notFound";
import Login from "./containers/Login/Login";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo center">
                TODO
              </a>

              <ul class="left">
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/todos/"> My Lists</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" />
            <Route exact path="/todos" component={Todo} />
            <Route
              exact
              path="/todos/:id/todoItems/:todoItemId/"
              component={MyTodo}
            />
            <Route path="/todos/:id/todoItems/" component={MyTodo} />

            <Route component={Notfound} />
          </Switch>
        </Router>
        <Login />
      </div>
    );
  }
}

/* 
<div class="input-field">
  <form>
    <input id="search" type="search" required />
    <label class="label-icon" for="search">
      <i class="material-icons">search</i>
      <i class="material-icons">close</i>
    </label>
  </form>
</div>;
*/
