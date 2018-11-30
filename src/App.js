import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import DashboardLand from './pages/dashboard-landing/DashboardLand';

import 'antd/dist/antd.css';
import './../src/index.css';
import './../src/pages/login/Login.css';
import Routes from './pages/routes/Routes';

import SettingDrawar from './components/setting-drawar/index'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawarVisible: false,
            loadervisible: false, 
          
          };
       this.showDrawar = this.showDrawar.bind(this);  
       this.setHide = this.setHide.bind(this); 
      }

      

      setHide(){
        this.setState({
          drawarVisible: false,
        });
      }

      showDrawar(){
        this.setState({
            drawarVisible: true,
          });
      }

    render() {
        return (
            <div className="Main">
              
              <Routes click={this.showDrawar}/>
              <SettingDrawar visible = {this.state.drawarVisible} onClose = {this.setHide}/>
        
            </div>
          );
    }
}

export default App;
