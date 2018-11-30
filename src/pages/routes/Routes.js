
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SourceDefinition from './../source-definition/SourceDefinition';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import Login from './../login/Login';
import SiderLayout from './../../layouts/layout2/SiderLayout';
import NavigationBar from './../../layouts/sidebar/index';
import Preview from './../preview/preview';
import { Layout, Menu, Icon, Input, Dropdown } from 'antd';
import './siderlayout.css';
import 'antd/dist/antd.css';
import Tables from './../table/table';
import TaskDesign from './../taskDesign/taskDesign';
import TLogo from './../../components/navbar-logo-single-T/logo'
import Image from './../../components/navbar-logo/image';
import MainBoard from './../main-board/MainBoard';
import ReconFlow from '../recon-flow/ReconFlow';
import welcome from './../select-role/welcome';
import Dashboard from './../dashboard/DashboardLand';
import flowtype from './../select-flow-type/selflowtype';
import CustomHeader from './../../components/header/index'
const Search = Input.Search;
const { Header, Sider, Content } = Layout;
const menu1 = (
    <Menu>
        <Menu.Item key="0">
            <a>You are all caught up! </a>

        </Menu.Item>
    </Menu>
);
const menu2 = (
    <Menu>
        <Menu.Item key="0">
            <a>No new messages</a>
        </Menu.Item>
    </Menu>
);
const menu3 = (
    <Menu className="menu">
        <Menu.Item key="0">
            <Icon type="profile"/>
            <span><a style={{color:'#757E82'}}>Edit Profile</a></span>
        </Menu.Item>
        <Menu.Divider className="menu9" />
        <Menu.Item key="1">
            <Icon type="read"/>
            <span><a style={{color:'#757E82'}}>View Profile</a></span>
        </Menu.Item>
        <Menu.Divider className="menu9" />
        <Menu.Item key="2">
            <Icon type="logout" />
            <span><a style={{color:'#757E82'}}>Sign Out</a></span>
        </Menu.Item>

    </Menu>
);

export default class Routes extends Component {

    /* state = {
        collapsed: false,
    }; */

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }

        this.showDrawar = this.showDrawar.bind(this);
    }

    showDrawar(){

        this.props.click();

    }

    render() {

        const logo=this.state.collapsed;

        return (
            <div>
                <Router>
                    <div >
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={Login}
                            />
                             
                             <Route
                                exact
                                path="/welcome"
                                component={welcome}
                            />
                             <Route
                                exact
                                path="/Dashboard"
                                component={Dashboard}
                            />

                            <Route
                                exact
                                path="/MainBoard"
                                component={MainBoard}
                            />

                            <Layout>
                                <Sider
                                    trigger={null}
                                    collapsible
                                    collapsed={this.state.collapsed}
                                  
                                >
                               
                            {logo?(
                                   <div className='sidebar'><div><TLogo/></div><div><NavigationBar /></div></div>
                                   ):( 
                                    <div className='sidebar'><div><Image/></div><div><NavigationBar /></div></div>)
                                     }
                                                              
                                </Sider>

                                {/* <Sider
                                    trigger={null}
                                    collapsible
                                    collapsed={!this.state.collapsed} 
                                >
                                    <NavigationBar1 />
                                </Sider> */}
                                <Layout>
                                <CustomHeader showBurgerMenu = {true} showIcon = {false} collapsedClick = {this.toggle}  showDrawar = {this.showDrawar}/>
                                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                                        <Route
                                            exact
                                            path="/SourceDefinition"
                                            component={SourceDefinition}
                                        />
                                        <Route
                                            exact
                                            path="/LayoutDefinition"
                                            component={LayoutDefinition}
                                        />
                                        <Route
                                            exact
                                            path="/RecordTokenizer"
                                            component={RecordTokenizer}
                                        />
                                        <Route
                                            exact
                                            path="/Preview"
                                            component={Preview}
                                        />
                                        <Route
                                            exact
                                            path="/Tables"
                                            component={Tables}
                                        />
                                        <Route
                                            exact
                                            path="/TaskDesign"
                                            component={TaskDesign}
                                        />
                                        <Route
                                            exact
                                            path="/ReconFlow"
                                            component={ReconFlow}
                                        />
                                          <Route
                                            exact
                                            path="/flowtype"
                                            component={flowtype}
                                        />
                                        

                                    </Content>
                                </Layout>
                            </Layout>

                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}