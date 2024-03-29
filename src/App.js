import React from "react";
import land from "./Page/land";
import Content from "./Page/content";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
} from "react-router-dom";
import { Divider } from "antd";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={land} />
          <Route path="/Content" component={Content} />
        </div>
      </Router>
    );
  }
}

export default App;
