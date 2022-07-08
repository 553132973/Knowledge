import React from "react";
import store from "../../store";
import TodoListUi from "./../../components/shillCom";
import List from "./components/list";
import "./index.css";
import axios from "axios";
import {
  changeInputAction,
  addItemAction,
  deleteItem,
  dataAction,
} from "./../../store/actionCreators";
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    store.subscribe(this.storeChange); //订阅Redux的状态
  }

  componentWillMount() {
    this.data();
  }

  data = () => {
    // axios
    //   .get("http://127.0.0.1:3000/api/v1/getData")
    //   .then((res) => {
    //     this.setState({
    //       list: res.data.data,
    //     });
    //     const action = dataAction(res.data.data);
    //     store.dispatch(action);
    //   })
    //   .catch((err) => {});
  };

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  storeChange = () => {
    this.setState(store.getState());
  };
  clickBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    const action = deleteItem(index);
    store.dispatch(action);
  }
  render() {
    const { data } = this.state;
    return (
      <div className="skillList">
        <List list={data || []} />
      </div>
    );
  }
}

export default index;
