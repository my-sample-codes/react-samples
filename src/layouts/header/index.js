import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Dropdown ,Button } from 'antd';
import 'antd/dist/antd.css';
import './header.css';
import SourceDefinition from '../../pages/source-definition/SourceDefinition';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Image from '../../components/navbar-logo/image';
import CustomHeader from '../../pages/header/index'

const Search = Input.Search;

class Headers extends Component {

  constructor(props){
    super(props);

    this.showDrawar = this.showDrawar.bind(this);
  }

  showDrawar(){
   this.props.click();
  }

 

  render() {
    return (
        <div>
            <CustomHeader showBurgerMenu = {false} showIcon = {true} showDrawar = {this.showDrawar}/>
        </div>  
    );
  }
}
export default Headers;