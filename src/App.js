import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainRoute, AdminRoute } from "./router/router";
import TemplateMain from "./core/main/template_main";
import TemplateAdmin from "./core/admin/templateAdmin";
import { Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showMainRouter = () => {
    let resule = "";
    resule = MainRoute.map((route, i) => {
      return (
        <Route key={i} path={route.path} exact={route.exact}>
          <TemplateMain Component={route.main}></TemplateMain>
        </Route>
      );
    });
    return resule;
  };
  showAdminRouter = () => {
    let resule = "";
    resule = AdminRoute.map((route, i) => {
      return (
        <Route key={i} path={route.path} exact={route.exact}>
          <TemplateAdmin Component={route.main}></TemplateAdmin>
        </Route>
      );
    });
    return resule;
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {this.showMainRouter()}
            {this.showAdminRouter()}
            <Route path="">
            {/* <h1>404 Not Found</h1> */}
            <Redirect to="/" />
          </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
