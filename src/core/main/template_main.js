import React, { Component, Fragment } from "react";
import Header from "./components/header/header";
import Foodter from "./components/foodter/foodter";

class TemplateMain extends Component {
  render() {
    let { Component } = this.props;
    return (
      <Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Component />
        </main>
        <footer>
          <Foodter />
        </footer>
      </Fragment>
    );
  }
}

export default TemplateMain;
