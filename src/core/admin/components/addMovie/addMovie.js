import React, { Component, Fragment } from "react";
import "./addMovie.scss";
import { connect } from "react-redux";
import * as action from "../../../../redux/action/index";
import { withRouter } from "react-router";
class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: 0,
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: "GP09",
      ngayKhoiChieu: "",
      danhGia: 8,
    };
  }
  //==========================================
  handleChange = (e) => {
    if (e.target.name === "hinhAnh") {
      this.setState({
        hinhAnh: e.target.files[0],
      });
      //console.log("hinhAnh:", e.target.files[0]);
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  //==========================================
  handleAddMovie = () => {
    //var formData = new FormData();
    //formData.append("maPhim", this.state.maPHim);
    //let d = new Date();
    //console.log(d.toJSON());
    let form_data = new FormData();
    for (var key in this.state) {
      form_data.append(key, this.state[key]);
      console.log(`${key}:`, form_data.get(key));
    }
    if (window.confirm("Bạn Muốn Thêm Phim ?")) {
      this.props.addMovie(form_data);
    }
  };
  //==========================================
  //==========================================
  //==========================================
  //==========================================
  render() {
    let { maPhim, tenPhim, biDanh, trailer, moTa, ngayKhoiChieu } = this.state;
    //console.log(maPhim, tenPhim, biDanh, hinhAnh, trailer, moTa, ngayKhoiChieu);
    return (
      <Fragment>
        <section className="add__movie">
          <div className="add__movie-title">
            <h1>Thêm Phim Mới</h1>
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
              <p>Tên Phim</p>
              <input
                type="text"
                name="tenPhim"
                value={tenPhim}
                id="tenPhim"
                onChange={this.handleChange}
              />
            </div>
            <div className="add__movie-input1">
              <p>Bí Danh</p>
              <input
                type="text"
                name="biDanh"
                value={biDanh}
                id="biDanh"
                onChange={this.handleChange}
              />
            </div>
            <div className="add__movie-input1">
              <p>Hình Ảnh</p>
              <input
                type="file"
                name="hinhAnh"
                id="hinhAnh"
                onChange={this.handleChange}
              />
            </div>
            <div className="add__movie-input1">
              <p>Trailer</p>
              <input
                type="text"
                name="trailer"
                value={trailer}
                id="trailer"
                onChange={this.handleChange}
              />
            </div>
            <div className="add__movie-input1">
              <p>Mô Tả</p>
              <input
                type="text"
                name="moTa"
                value={moTa}
                id="moTa"
                onChange={this.handleChange}
              />
            </div>
            <div className="add__movie-input1">
              <p>ngày Khởi Chiếu</p>
              <input
                type="text"
                name="ngayKhoiChieu"
                value={ngayKhoiChieu}
                id="ngayKhoiChieu"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="add__movie-btn">
            <button
              className="btn btn-warning"
              onClick={() => {
                this.handleAddMovie();
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
    addMovie: (data) => {
      dispath(action.push_movie_api(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPathToProps
)(withRouter(AddMovie));

//"https://www.youtube.com/embed/oVeaajIfghU"

//Một nàng tiên cá (Mermaid) phải lòng người chồng chưa cưới của Marina và nhằm mục đích để giữ anh ta đi từ Marina trong Vương Quốc Chết Chóc của mình dưới nước. Nàng tiên cá là một phụ nữ trẻ bị chết đuối vài thế kỷ trước. Marina chỉ có một tuần để vượt qua nỗi sợ của cô về nước tối, để duy trì con người trong cuộc chiến chết người với những con quái vật và cố gắng không biến thành một trong số chúng.
