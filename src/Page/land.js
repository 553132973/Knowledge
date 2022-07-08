import React from "react";
import { Link } from "react-router-dom";
import Modal from "../components/modal/index";
class land extends React.Component {
  state = {
    id: "land",
  };

  componentDidMount() {
    const { id } = this.state;
    document.getElementById(id).addEventListener(
      "touchmove",
      function (event) {
        event.preventDefault();
      },
      false
    );
  }

  render() {
    const { id } = this.state;
    return (
      <div
        id={id}
        style={{
          position: "fixed",
          top: "40%",
          width: "30%",
          left: "35%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Modal />
        <h2 style={{ zIndex: "999" }}>
          <Link to="/content">欢迎点我，花里胡哨</Link>
        </h2>
      </div>
    );
  }
}

export default land;
