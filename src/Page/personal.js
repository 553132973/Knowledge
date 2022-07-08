import React from "react";
import { Drawer, Radio } from "antd";
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
          title="个人简介"
          placement={"top"}
          closable={false}
          onClose={this.props.onClosed}
          visible={this.props.visible}
        >
          <p>请叫我二狗子</p>
        </Drawer>
      </div>
    );
  }
}

export default personal;
