import React, { Component, Fragment } from "react";
import "./modal.scss";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { show, close } = this.props;
    return (
      <Fragment>
        {show ? (
          <div className="pop-up__modal">
            <div className="modal__content">
              <div>
                <h1>header modal</h1>
              </div>
              <div>
                <h2>body modal</h2>
              </div>
              <div>
                <h1>foodter modal</h1>
                <button type="button" class="btn btn-primary" onClick={close}>
                  close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default Modal;
