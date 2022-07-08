import React from "react";
import { Link } from "react-router-dom";

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
          width: "100px",
          height: "400px",
          display: "flex",
          top: "30%",
          left: "15%",
          border: "1px solid black",
          textAlign: "center",
        }}
      >
        <p>
          <Link to="/content">点我</Link>
        </p>
      </div>
    );
  }
}

export default land;
