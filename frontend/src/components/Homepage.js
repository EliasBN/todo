import React, { Component } from "react";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>
          Hello and welcome to our TODO-List. This is an open source project,
          currently under an MIT-license. This project was created as a
          university project written for an introductionary course to
          open-source software. It is therefore created using only open source
          components.
        </p>
      </div>
    );
  }
}
