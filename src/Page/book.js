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

  render() {
    return <div className="bookModel">sssss</div>;
  }
}

export default book;
