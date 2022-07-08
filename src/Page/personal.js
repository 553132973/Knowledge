import React from "react";
import { Drawer, Button, Radio } from "antd";
const RadioGroup = Radio.Group;

class personal extends React.Component {
  state = {};

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <RadioGroup defaultValue={this.state.placement} />
        <Drawer
          title="Basic Drawer"
          placement={"top"}
          closable={false}
          onClose={this.props.onClosed}
          visible={this.props.visible}
        >
          <p>ss</p>
        </Drawer>
      </div>
    );
  }
}

export default personal;
