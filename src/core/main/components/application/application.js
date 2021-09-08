import React, { Component } from "react";
import "./application.scss";

class Application extends Component {
  showItemCarou = () => {
    let arrC1 = [1, 2, 3, 4, 5, 6, 7, 8];
    let resule = "";
    resule = arrC1.slice(1).map((a, i) => {
      return (
        <div className="carousel-item" key={`mbfe${i}`}>
          <img
            src={require(`../../../../access/images/image/c${a}.png`).default}
            className="d-block w-100"
            alt="..."
          />
        </div>
      );
    });
    return resule;
  };
  render() {
    return (
      <section className="application__page" id="ungdung">
        <div className="app__page-overlay"></div>
        <div className="app__page-left">
          <div className="app__mobile">
            <div className="app__mobile-text">
              <div className="app__mobile-over">
                <p>Ứng Dụng Nay Đã Có Mặt Tại</p>
              </div>
            </div>
            <div className="app__mobile-icon">
              <div className="app__mobile-icon1">
                <i className="fab fa-android"></i>
                <span>Hệ Điều Hành Android</span>
              </div>
              <div className="app__mobile-icon1">
                <i className="fab fa-app-store-ios"></i>
                <span>Hệ Điều Hành IOS</span>
              </div>
              <div className="app__mobile-icon1">
                <i className="fab fa-windows"></i>
                <span>Hệ Điều Hành Window</span>
              </div>
              <div className="app__mobile-icon1">
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    window.alert("Dowload Thành công !");
                  }}
                >
                  Tải Ngay Ứng Dụng Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="app__page-right">
          <div className="app__page-img"></div>
          <div className="app__page-text">
            <div
              id="carouselApplication"
              className="carousel slide"
              data-ride="carousel"
              data-interval="1000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={
                      require(`../../../../access/images/image/c1.png`).default
                    }
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                {this.showItemCarou()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Application;
