import React from 'react';
import { Row, Col } from 'antd';
import '../css/header.css';
import Personal from './personal';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
} from 'react-router-dom';
import SkillArticle from './skillArticle';
import Movies from './movie';
import Book from './book';
import Edit from './edit';
import Jay from '../music/晴天_周杰伦_128K.mp3'
class header extends React.Component {
  state = {
    visible: false,
  };
  
  showDrawer = () => {
    let that = this;
    this.setState({
      visible: true,
    });
  };
  onClosed = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <Router>
        <div>
          <div className="headerClass">
            <div className="inLine">
              <Row>
                <Col type="flex" span={6}>
                  <div className="leftHeader">
                    <div className="headImg">
                      <img src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558490629&di=64c246d99d759b5d455b7ce4a598296a&src=http://img3.duitang.com/uploads/item/201508/30/20150830080620_niAmE.jpeg' />
                    </div>
                    <div className="headName">
                      <p>undefindBird</p>
                    </div>
                  </div>
                </Col>
                <Col type="flex" span={12}>
                  <div className='headerMusic'>
                    <div className="centerHeader">
                      <p>
                        <Link to="/content">技术</Link>
                      </p>
                      <p className="tabBtn">
                        <Link to="/content/movies">电影</Link>
                      </p>
                      <p className="tabBtn">
                        <Link to="/content/book">书本</Link>
                      </p>
                      <p className="tabBtn">
                        <Link to="/content/edit">编辑</Link>
                      </p>
                    </div>
                    <audio src={Jay} controls="controls" className='musicCss'>
                    </audio>
                  </div>
                </Col>
                <Col type="flex" span={6}>
                  <div className="rightHeader">
                    <p className="weChat">
                      <img
                        src={require('../images/social_wechat.png')}
                        alt="微信"
                      />
                    </p>
                    <a className="weChat" href="https://github.com/553132973">
                      <img
                        src={require('../images/social_github.png')}
                        alt="github"
                      />
                    </a>
                    <p onClick={this.showDrawer}>
                      <img src={require('../images/user.png')} alt="个人" />
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="mainBody">
            <Route path="/content/edit" component={Edit} />
            <Route path="/content/book" component={Book} />
            <Route path="/content/movies" component={Movies} />
            <Route exact path="/content" component={SkillArticle} />
          </div>
          <Personal onClosed={this.onClosed} visible={this.state.visible} />
        </div>
      </Router>
    );
  }
}
export default header;
