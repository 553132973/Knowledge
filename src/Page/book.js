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
    this.bookListMethod();
  }
  bookListMethod = () => {
    axios
      .get(`${api.address}bookList`)
      .then((res) => {
        this.setState({
          bookList: [],
        });
      })
      .catch((err) => {});
  };
  render() {
    return (
      <div className="bookModel">
        <BookList listData={this.state.bookList} />
      </div>
    );
  }
}

export default book;
