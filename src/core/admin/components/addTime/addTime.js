import React, { Component, Fragment } from "react";
import "./addTime.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
class AddTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: 0,
      ngayChieuGioChieu: "",
      maRap: 0,
    };
  }
  //==========================================
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //==========================================
  handleAddTime = () => {
    let { maPhim, ngayChieuGioChieu, maRap } = this.state;
    let data = {
      maPhim: parseInt(maPhim),
      ngayChieuGioChieu: ngayChieuGioChieu,
      maRap: parseInt(maRap),
      giaVe: 90000,
    };
    if (window.confirm("Bạn muốn thêm lịch chiếu ?")) {
      console.log(data);
      this.props.addTime(data);
    }
  };
  render() {
    let { maPhim, ngayChieuGioChieu, maRap } = this.state;
    return (
      <Fragment>
        <section className="add__movie">
          <div className="add__movie-title">
            <h1>Thêm Lịch chiếu</h1>
          </div>
          <div className="add__movie-input">
            <div className="add__movie-input1">
              <p>Mã Phim</p>
              <input
                type="number"
                name="maPhim"
                value={maPhim}
                id="maPhim"
                onChange={this.handleChange}
              />
            </div>
            <div className="add__movie-input1">
              <p>Giờ Chiếu</p>
              <input
                type="text"
                name="ngayChieuGioChieu"
                value={ngayChieuGioChieu}
                id="ngayChieuGioChieu"
                onChange={this.handleChange}
              />
            </div>
            <div className="add__movie-input1">
              <p>Mã Rạp</p>
              <input
                type="number"
                name="maRap"
                value={maRap}
                id="maRap"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="add__movie-btn">
            <button
              className="btn btn-warning"
              onClick={() => {
                this.handleAddTime();
              }}
            >
              {" "}
              Thêm Phim
            </button>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDisPathToProps = (dispath, props) => {
  return {
    addTime: (data) => {
      dispath(action.push_movie_time_api(data));
    },
  };
};

export default connect(mapStateToProps, mapDisPathToProps)(withRouter(AddTime));

//ma phim 8419
//ma rap: 901 -> 910  // megaGS
//lich chiếu: 25-10-2021T00:00:00
