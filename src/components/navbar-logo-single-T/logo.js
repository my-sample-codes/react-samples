import 'antd/dist/antd.css';

import React, { Component } from 'react';


import tmobiles from './../../assets/logos/logo1.png';

import './logo.less';




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