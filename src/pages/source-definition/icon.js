import React, { Component } from 'react';
import { Card, Col, Row, Layout, Icon} from 'antd';
import './cards.css'
import './iconcss.css'

const { Content } = Layout;

class IconCards extends Component {
    
    render() {
      return (
        <Icon className="addiconcss" type="file-text" theme="filled" twoToneColor="deeppink" />
      );
    }
}


export default IconCards;