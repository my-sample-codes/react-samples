import React, { Component } from 'react';
import OperationCenter from './../../assets/icons/operationcenter.png';
import Reports from './../../assets/icons/report.png'
import FlowDesign from './../../assets/icons/flowdesign.png'
import SysAdmin from './../../assets/icons/sysadmin.png'
import Header from './../../layouts/header/index';
import Dashboard from './../dashboard/DashboardLand';
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from 'react-router-dom';
import './SelectRole.less';

class SelectRole extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="titleDiv">
                    <h1>Welcome to Optimus!</h1>
                </div>
               
                <div className="selectRole">
                    <div className="roleDiv">
                        <img src={OperationCenter} alt='OperationCenter'/><br /><br/>
                        <h3>Operation Center</h3>
                    </div>
                    <div className="roleDiv">
                        <img src={Reports} alt='Reports'/><br /><br/>
                        <h3>Reports</h3>
                    </div>
                    <div>
                        <Link to="/Dashboard">
                            <div className="roleDiv">
                                <img src={FlowDesign} alt='FlowDesign'/><br /><br/>
                                <h3>Flow Design</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="roleDiv">
                        <img src={SysAdmin} alt='Sys Admin'/><br /><br/>
                        <h3>Sys Admin</h3>
                    </div>
                </div>
            </div>
          );
    }
}
export default SelectRole;