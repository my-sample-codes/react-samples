import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Select, Card, Input, Button, Table, Divider, Tag, Steps, Breadcrumb } from 'antd';
import DashboardLand from './pages/dashboard-landing/DashboardLand';
import BackgroundImg from './../src/pages/login/loginimg.png';
import 'antd/dist/antd.css';
import './../src/pages/login/index.css';
import './../src/pages/login/Login.css';

import WrappedLoginForm from './pages/login/LoginForm';

class App extends Component {
    render() {
        return (
            <div className="Main">
              <WrappedLoginForm />
            </div>
          );
    }
}
export default App;
