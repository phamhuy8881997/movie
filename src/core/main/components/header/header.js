import React, { Component } from "react";
//import Modal from "../../components/modal/modal";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_show: false,
    };
  }
  // handleShowModal = () => {
  //   this.setState({ is_show: false });
  // };
  render() {
    //let { is_show } = this.state;
    return (
      // <div>
      //   {is_show ? (
      //     <div
      //       onClick={() => {
      //         this.handleShowModal();
      //       }}
      //       className="background__modal"
      //     ></div>
      //   ) : null}
      //   <button
      //     type="button"
      //     class="btn btn-danger"
      //     style={{ marginTop: "45vh" }}
      //     onClick={() => {
      //       this.setState({ is_show: true });
      //     }}
      //   >
      //     show modal
      //   </button>
      //   <Modal show={is_show} close={this.handleShowModal} />
      // </div>
      <div>
        <h1>header</h1>
      </div>
    );
  }
}

export default Header;
