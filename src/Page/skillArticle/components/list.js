import React, { Component } from "react";
import "../index.css";
import timeJpg from "../../../images/timg.jpg";
import store from "../../../store";
class list extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    const { list } = this.props;
    return (
      <div className="skillList">
        {list.map((v) => {
          return (
            <div className="eachColumn" key={v.id}>
              <div>
                <p className="skillListTitle">{v.title}</p>
                <img src={timeJpg} className="skillListImg" />
                <p
                  className="skillListMain"
                  dangerouslySetInnerHTML={{ __html: v.htmlVal }}
                ></p>
              </div>
              <div className="time">
                <p>{v.currentTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default list;
