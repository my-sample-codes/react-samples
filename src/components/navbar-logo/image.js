import 'antd/dist/antd.css';

import React, { Component } from 'react';

import tmobiles from './tmobiles.jpg';

import './image.css';




class Image extends Component {

    render() {
      return (
        <div className="logo">
        <img src={tmobiles} alt="tmobiles" className="logo_img" />
      </div>
      );
    }
  }
  export default Image;