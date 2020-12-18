import React from 'react';
import { Link } from 'react-router-dom';

class land extends React.Component {
  state = {
    id:'land'
  };

  componentDidMount() {
    const {id} = this.state
    document.getElementById(id).addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false)
  }


  render() {
    const {id} = this.state
    return (
      <div id={id}>
        <p> <Link to="/content">登陆1</Link> </p>
      </div>
    );
  }
}

export default land;
