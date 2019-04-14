import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./containers/TODO/Todo";
import AddTodos from "./containers/AddTodos";
import Notfound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos/">My Lists</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/todos" component={Todo} />
              <Route path="/todos/:id" component={AddTodos} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
