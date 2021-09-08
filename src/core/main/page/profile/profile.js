import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
import Loading from "../../components/loading/loading";
import "./profile.scss";
import ReactToPrint from "react-to-print";

const logo = require(`../../../../access/images/image/logo1.png`).default;
const dateFormat = require("date-format");

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let user;
    if (localStorage.getItem("userLogin")) {
      user = JSON.parse(localStorage.getItem("userLogin"));
    }
    let data = {
      taiKhoan: user.taiKhoan,
    };
    this.props.dataUserAPI(data);
  }
  renderItemList = () => {
    let { dataUser } = this.props;
    let resule = "";
    resule = dataUser?.thongTinDatVe.map((item, i) => {
      return (
        <Fragment key={`sqqaf${i}`}>
          <div ref={(el) => (this.componentRef = el)} className="item__profile">
            <div className="item__text">
              <div>
                <img src={logo} alt="..." />
                <p>Họ Tên: {dataUser.hoTen}</p>
                <p>Số Điện Thoại: {dataUser.soDT}</p>
              </div>
              <div>
                <p>Tên Phim: {item.tenPhim}</p>
                <p>Mã Vé: {item.maVe}</p>
                <p>Giá vé: {item.giaVe} VNĐ</p>
                <p>Thời Lượng: {item.thoiLuongPhim} Phút</p>
                <p>
                  Ngày Đặt:{" "}
                  {dateFormat("hh:mm dd/MM/yyyy", new Date(item.ngayDat))}
                </p>
              </div>
            </div>
            <div className="dfex__chair">
              {this.renderGheNgoi(item.danhSachGhe)}
            </div>
          </div>
          <ReactToPrint
            trigger={() => {
              return (
                <button
                  type="button"
                  className="btn btn-warning btn-lg mb-5 mt-2"
                >
                  In Vé
                </button>
              );
            }}
            content={() => this.componentRef}
          />
        </Fragment>
      );
    });
    return resule;
  };
  renderGheNgoi = (danhSachGhe) => {
    let resule = "";
    resule = danhSachGhe.map((item, i) => {
      return (
        <div key={`qwodz${i}`} className="item__chair">
          <p>Địa Điểm: {item.tenHeThongRap}</p>
          <p>Rạp Chiếu: {item.tenRap}</p>
          <p>Ghế: {item.tenGhe}</p>
        </div>
      );
    });
    return resule;
  };
  render() {
    let { dataUser } = this.props;
    //console.log(dataUser);
    return (
      <Fragment>
        {dataUser.taiKhoan === undefined ? (
          <Loading />
        ) : (
          <section className="profile__page">
            <div className="profile__header text-center">
              <h1>Thông Tin Tài Khoản</h1>
            </div>
            <div className="profile__body">
              <div className="profile__body--left">
                <p>Họ tên: {dataUser.hoTen} </p>
                <p>Tài Khoản: {dataUser.taiKhoan}</p>
                <p>Mật Khẩu: {dataUser.matKhau}</p>
                <p>Email: {dataUser.email}</p>
                <p>Số Điện Thoại: {dataUser.soDT}</p>
                <p>Mã Nhóm: {dataUser.maNhom}</p>
                <p>Loại: {dataUser.loaiNguoiDung}</p>
              </div>
              <div className="profile__body--right">
                {this.renderItemList()}
              </div>
            </div>
            <div></div>
            <div className="profile__foodter"></div>
          </section>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.dataUser,
  };
};
const mapDisPathToProps = (dispath, props) => {
  return {
    dataUserAPI: (data) => {
      dispath(action.get_user_api(data));
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(withRouter(Profile));

// email: "lea@gmail.com"
// hoTen: "le van a"
// loaiNguoiDung: null
// maNhom: "GP09"
// matKhau: "123456789"
// soDT: "0912341234"
// taiKhoan: "aabbcc"
// thongTinDatVe: (4) [{…}, {…}, {…}, {…}]
