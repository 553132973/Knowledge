import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/modal/index'
import '../css/land.css'
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
      <div id={id} className='land'>
        <Modal/>
        <p style={{zIndex:1}}> <Link to="/content" className='landBtn'>想要钱，点我</Link> </p>
      </div>
    );
  }
}

export default land;
