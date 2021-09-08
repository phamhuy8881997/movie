import React, { Component, Fragment } from "react";
import "./dataUser.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
class DataUser extends Component {
  componentDidMount() {
    this.props.dataUsers();
  }
  renderUsers = () => {
    let { adminAllUser } = this.props;
    let resule = "";
    resule = adminAllUser?.map((user, i) => {
      return (
        <div className="admin__users--item" key={`fsngng4${i}`}>
          <p>Họ tên: {user.hoTen} </p>
          <p className="admin__users--color1">Tài Khoản: {user.taiKhoan} </p>
          <p className="admin__users--color1">Mật Khẩu: {user.matKhau} </p>
          <p>Email: {user.email}</p>
          <p>Số Điện Thoại: {user.soDt}</p>
          <p>Phân Loại: {user.maLoaiNguoiDung}</p>
        </div>
      );
    });
    return resule;
  };
  render() {
    console.log(this.props.adminAllUser);
    return (
      <Fragment>
        <section className="admin__users">
          <div className="admin__users--tittle">
            <h1>Danh Sách Tài Khoản</h1>
          </div>
          <div className="admin__users--body">{this.renderUsers()}</div>
          <div className="admin__users--foodter"></div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminAllUser: state.adminAllUser,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    dataUsers: () => {
      dispath(action.get_data_user_api());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPathToProps
)(withRouter(DataUser));
