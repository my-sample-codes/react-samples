import 'antd/dist/antd.css';

import React, { Component } from 'react';

import tmobiles from './../../assets/tmobiles.jpg';
import tmobiles1 from './../../assets/tmobiles1.png';
import './image.css';




class Image extends Component {

    render() {
      return (
        <div className="logo">
        <img src={tmobiles1} alt="tmobiles1" className="logo_img" />
      </div>
      );
    }
  }
  export default Image;