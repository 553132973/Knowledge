import React, { Component } from "react";
import "../index.css";
import timeJpg from "../../../images/timg.jpg";
import store from "../../../store";
import axios from "axios";
class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  getList = () => {
    const that = this;
    axios
      .get("/api/v1/getData")
      .then(function (response) {
        const { data } = response;
        that.setState({
          list: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    const { list } = this.state;
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
                <p>{v.startTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default list;
