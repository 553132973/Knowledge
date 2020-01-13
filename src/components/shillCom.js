import React from 'react';
import { Input, Button, List } from 'antd';
const TodoListUi = (props) => {
  return (
    <div>
      <p>我是skill</p>
      <Input placeholder={props.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={props.changeInputValue} />
      <div style={{ margin: "'10px','0px'", width: '300px' }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>)}
        />
      </div>
      <Button
        type="primary"
        onClick={props.clickBtn}
      >增加</Button>
      {
        props.data.map((a, b) => {
          return <div>
            <p>{a.title}</p>
            <div key={b} dangerouslySetInnerHTML={{ __html: a.content }}>
            </div>
          </div>
        })
      }
    </div>
  );
}

export default TodoListUi