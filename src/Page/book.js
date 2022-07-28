import React from "react";
import "../css/book.css";
import axios from "axios";
import store from "../store";
import api from "./../config/index";
import { bookListAction } from "./../store/actionCreators";
import BookList from "../components/bookList";
class book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
    };
  }
  componentWillMount() {
    this.data();
  }

  data = () => {
    axios
      .get("http://127.0.0.1:3001/getData")
      .then((res) => {
        console.log(res);
        this.setState({
          list: res.data.data,
        });
        // const action = dataAction(res.data.data);
        // store.dispatch(action);
      })
      .catch((err) => {});
  };
  render() {
    return <div className="bookModel">sssss</div>;
  }
}

export default book;
