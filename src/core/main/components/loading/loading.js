import React, { Component } from "react";
import "./loading.scss";
class Loading extends Component {
  render() {
    return (
      <div id="loading__component">
        <div className="loading__img">
          <img
            src={require(`../../../../access/images/image/logo1.png`).default}
            alt="..."
          />
        </div>
        <div className="loading__text text-center">
          <h3>... Đang Tải Dữ Liệu ...</h3>
        </div>
      </div>
    );
  }
}

export default Loading;
