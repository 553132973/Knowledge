import React, { Component } from "react";

export default class divination extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../images/2.gif")}
            alt="八卦"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p>同声相应同气相求</p>
        </div>
      </div>
    );
  }
}
