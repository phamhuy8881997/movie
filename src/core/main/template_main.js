import React, { Component, Fragment } from "react";
import Header from "./components/header/header";
import Foodter from "./components/foodter/foodter";
import Menu from "./components/menu/menu";

class TemplateMain extends Component {
  render() {
    let { Component } = this.props;
    return (
      <Fragment>
        <header>
          <Header />
          <Menu />
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
