import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './footer.css'

const { Footer } = Layout;

class Footers extends Component {

  render() {
    return (
      <Footer className="footer">
        Opus Software ©2018 Copyright reserved.
      </Footer>
    );
  }
}
export default Footers;