import 'antd/dist/antd.css';

import React, { Component } from 'react';


import tmobiles from './tmoblogo.png';

import './logo.css';




class Logo extends Component {

    render() {
      return (
        <div className="logo-t">
        <img src={tmobiles} alt="tmobiles" className="logo_img-t" />
      </div>
      );
    }
  }
  export default Logo;