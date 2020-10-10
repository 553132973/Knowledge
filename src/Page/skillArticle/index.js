import React from 'react';
import store from '../../store';
import TodoListUi from './../../components/shillCom';
import List from './components/list';
import css from './index.less'
import axios from 'axios';
import { changeInputAction, addItemAction, deleteItem,dataAction } from './../../store/actionCreators';
const arr = ['小时', '2时', '3时', '4时', '5时', '6时']
class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  componentWillMount() {
    axios.get('https://cnodejs.org/api/v1/topics').then((res) => {
      const action = dataAction(res.data.data)
      store.dispatch(action)
    }).catch((err) => {
      
    })
    this.data()
  }

  data = ()=>{
    axios.get('http://localhost:3000/mock/data1.json').then((res) => {
      console.log(res.data)
      // const action = dataAction(res.data.data)
      // store.dispatch(action)
    }).catch((err) => {
      
    })
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  storeChange = () => {
    this.setState(store.getState())
  }
  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = deleteItem(index)
    store.dispatch(action)
  }
  render() {
    return (
      <div className={css.skillList}>
        <List/>
        {/* <TodoListUi
          inputValue={this.state.inputValue}
          list={this.state.list}
          changeInputValue={this.changeInputValue}
          clickBtn={this.clickBtn}
          deleteItem={this.deleteItem}
          data={this.state.data}
        /> */}
      </div>
    );
  }
}

export default index;
