import React from "react";
import "antd/dist/antd.css";
import Header from "./header";
import "../css/all.css";
import Modal from "../components/modal/index";

class content extends React.Component {
  componentDidMount() {
    console.log(11);
  }
  render() {
    return (
      <div>
        <Modal />
        <Header />
      </div>
    );
  }
}

export default content;
