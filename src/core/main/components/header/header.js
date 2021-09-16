import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Modal from "../../components/modal/modal";
import "./header.scss";
import { withRouter } from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { taiKhoan: "NoLogin" },
    };
  }
  componentDidMount() {
    if (localStorage.getItem("userLogin")) {
      let user = JSON.parse(localStorage.getItem("userLogin"));
      this.setState({ user: user });
    }
  }
  handleLogOutUser = () => {
    localStorage.setItem("userLogin", JSON.stringify({ taiKhoan: "NoLogin" }));
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  handleScroll = (value) => {
    this.props.history.push("/");
    setTimeout(() => {
      let pos = document.getElementById(value).offsetTop;
      window.scrollTo(0, pos - 100);
    }, 1000);
  };
  render() {
    //console.log("user", this.state.user);
    return (
      <div>
        <div className="header">
          <div className="header__logo">
            <a href="/">
              <i className="fa fa-star fa-spin i__header"></i>
              <p>Star Blue </p>
            </a>
            <div className="name__movie"></div>
          </div>

          <div className="header__content">
            {this.state.user.taiKhoan === "NoLogin" ? (
              <Link className="login__icon" to="/login">
                <i className="fa fa-user-circle mr-2"></i>
                <span>Đăng Nhập</span>
              </Link>
            ) : (
              <div
                className="login__icon"
                onClick={() => {
                  this.handleLogOutUser();
                }}
              >
                <i className="fa fa-user-times mr-2"></i>
                <span>Đăng Xuất</span>
              </div>
            )}
          </div>

          <div className="header__menu" id="header__menu">
            <div className="header__menu--content">
              <p
                onClick={() => {
                  this.handleScroll("lichchieu");
                }}
              >
                <span>Lịch Chiếu</span>
              </p>
              <p
                onClick={() => {
                  this.handleScroll("cumrap");
                }}
              >
                <span>Cụm Rạp</span>
              </p>
              <p
                onClick={() => {
                  this.handleScroll("tintuc");
                }}
              >
                <span>Tin Tức</span>
              </p>
              <p
                onClick={() => {
                  this.handleScroll("ungdung");
                }}
              >
                <span>Ứng Dụng</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
