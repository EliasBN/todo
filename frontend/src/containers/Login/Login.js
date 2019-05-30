import React, { Component } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  email(event) {
    this.setState({ email: event.target.value });
  }

  password(event) {
    this.setState({ password: event.target.value });
  }

  async handleLogin() {
    const email = this.state.email;
    const password = this.state.password;

    if (
      email &&
      password ==
        (await axios.get(`/api/todos/${this.props.match.params.id}/todoItems`))
    ) {
      return true;
    }
    alert("test" + email + password);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <div class="container">
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <div class="row">
              <div class="input-field col s12">
                <TextInput
                  value={this.state.email}
                  onChange={this.email}
                  class="validate"
                  id="user_name"
                />
                <label class="active" for="user_name">
                  Username
                </label>
              </div>
              <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <TextInput
                      value={this.state.password}
                      onChange={this.password}
                      class="validate"
                      id="password"
                    />
                    <label class="active" for="password">
                      Password
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" disabled={!this.validateForm()} title="Login" />
        </form>
      </div>
    );
  }
}
