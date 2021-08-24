import React, { Component, Fragment } from "react";
import Banner from "../../components/banner/banner";
import Carousel from "../../components/carousel/carousel";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Carousel />
        <Banner />
      </Fragment>
    );
  }
}

export default Home;
