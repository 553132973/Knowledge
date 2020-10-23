import React, { Component } from "react";
import "../index.css";
import timeJpg from "../../../images/timg.jpg";
class list extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="skillList">
        <div className="eachColumn">
          <div>
            <p className="skillListTitle">我是标题</p>
            <img src={timeJpg} className="skillListImg" />
            <p className="skillListMain">
              此外还需要加载jQuery库和jquery.editable-select.js文件，在源码下载包里已经有了。 jQuery
              只需要以下代码就能实现传统的下拉框变成有输入功能的下拉框了。
            </p>
          </div>
        </div>
        <div className="eachColumn">
          <div>
            <p className="skillListTitle">我是标题</p>
            <img src={timeJpg} className="skillListImg" />
            <p className="skillListMain">
              此外还需要加载jQuery库和jquery.editable-select.js文件，在源码下载包里已经有了。 jQuery
              只需要以下代码就能实现传统的下拉框变成有输入功能的下拉框了。
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default list;
