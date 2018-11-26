
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SourceDefinition from './../source-definition/SourceDefinition';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import Login from './../login/LoginForm';
import SiderLayout from './../../layouts/layout2/SiderLayout';
import NavigationBar from './../../layouts/sidebar/index';
import Preview from './../preview/preview';
import { Layout, Menu, Icon, Input, Dropdown } from 'antd';
import './siderlayout.css';
import 'antd/dist/antd.css';
import './header.less';
import Tables from './../table/table';
import TaskDesign from './../taskDesign/taskDesign';
import TLogo from './../../components/navbar-logo-single-T/logo'
import Image from './../../components/navbar-logo/image';
import MainBoard from './../main-board/mainBoard';

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


export default class Routes extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {

        const menu3 = (
            <Menu className="menu">
                <Menu.Item key="0">
                    <a >Edit Profile</a>
                </Menu.Item>
                <Menu.Divider className="menu9" />
                <Menu.Item key="1" onClick={this.props.click}>
                  <a >Change Settings</a>
                </Menu.Item>
                <Menu.Divider className="menu9" />
                <Menu.Item key="1">
                    <a >View Profile</a>
                </Menu.Item>
                <Menu.Divider className="menu9" />
                <Menu.Item key="2">
                    <a >Sign Out</a>
                </Menu.Item>
        
            </Menu>
        );

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
                                    <Header style={{ padding: 7, paddingLeft: 18 }} >
                                        <Icon style={{ fontSize: '26px' }}
                                            className="trigger"
                                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                            onClick={this.toggle}
                                        />

                                        <div className="iconlist" >
                                            <Dropdown overlay={menu1} trigger={['click']}>
                                                <a className="iconbell" href="#">
                                                    <Icon type="bell" style={{ fontSize: '22px', color: '#FFFFFF' }} />
                                                </a>
                                            </Dropdown>


                                            <Dropdown overlay={menu2} trigger={['click']}>
                                                <a className="iconbell" href="#">
                                                    <Icon type="message" className="iconmsg" style={{ fontSize: '22px', color: '#FFFFFF' }} />

                                                </a>
                                            </Dropdown>
                                            <Dropdown overlay={menu3} trigger={['click']} onClick={this.showModal}>
                                                <a className="iconbell" href="#">
                                                    <Icon type="user" className="iconuser" style={{ fontSize: '22px', color: '#FFFFFF' }} />
                                                </a>

                                            </Dropdown>
                                            {/* <Button type="dashed" >
           < Icon type="plus" />
         </Button>
        */}

                                        </div>
                                    </Header>
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