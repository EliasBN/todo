import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "../containers/TODO/Todo";
import MyTodo from "../containers/MyTodo/MyTodo";
import Notfound from "./notFound";
import Login from "../containers/Login/Login";
import Homepage from "./Homepage";

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }
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
              <ul class="right">
                <li>
                  <Link to="/login/">Login</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/todos" component={Todo} />
            <Route path="/login" component={Login} />
            <Route
              exact
              path="/todos/:id/todoItems/:todoItemId/"
              component={MyTodo}
            />
            <Route path="/todos/:id/todoItems/" component={MyTodo} />

            <Route component={Notfound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
