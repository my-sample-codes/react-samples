import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Select, Card, Input, Button, Table, Divider, Tag, Steps, Breadcrumb } from 'antd';
import DashboardLand from './pages/dashboard-landing/DashboardLand';
import BackgroundImg from './../src/pages/login/loginimg.png';
import 'antd/dist/antd.css';
import './../src/pages/login/index.css';
import './../src/pages/login/Login.css';
import Routes from './pages/routes/Routes';

class App extends Component {
    render() {
        return (
            <div className="Main">
              <Routes/>
            </div>
          );
    }
}
export default App;
