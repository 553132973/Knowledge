import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import '../css/edit.css'
import {Button} from 'antd'
export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
  }
  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
    })
  }
  btn = () => {
    this.setState({
        html: this.state.editorState.toHTML(),
    })
    console.log(this.state.editorState.toHTML())
  }
  info = (data) => {
    // if(data=='skill'){
    //   // message.info('技术');
    // }else if(data=='movie'){
    //   message.info('电影');
    // }else if(data=='book'){
    //   message.info('书本');
    // }
  };


  render () {
    const { editorState } = this.state
    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
        <div className="submit">
          <Button onClick={this.btn}>技术</Button>
          <Button onClick={this.info.bind(this,'movie')}>电影</Button>
          <Button onClick={this.info.bind(this,'book')}>书本</Button>
        </div>
        <div dangerouslySetInnerHTML={{__html:this.state.html}}></div>
      </div>
    )

  }

}