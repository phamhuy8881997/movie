import React, { Component } from "react";

class TemplateAdmin extends Component {
  render() {
    let { Component } = this.props;
    return (
      <div>
        <header>
          <h1>header admin</h1>
        </header>
        <main>
          <Component />
        </main>
      </div>
    );
  }
}

export default TemplateAdmin;
