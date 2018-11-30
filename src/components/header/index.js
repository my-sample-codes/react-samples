import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Dropdown } from 'antd';
import Image from '../../components/navbar-logo/image';
import './header.less'

const { Header } = Layout;


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

export default class CustomHeader extends React.Component {

    constructor(props) {
        super(props);

        console.log("PROPS ::: ",this.props);

        this.showIcon = this.props.showIcon;
        this.showBurgerMenu = this.props.showBurgerMenu;
        this.state = {};

    }

    render() {

        const menu3 = (
            <Menu className="menu">
                <Menu.Item key="0">
                    <Icon type="profile" />
                    <span><a style={{ color: '#757E82' }}>Edit Profile</a></span>
                </Menu.Item>
                <Menu.Divider className="menu9" />
                <Menu.Item key="1">
                    <Icon type="read" />
                    <span><a style={{ color: '#757E82' }}>View Profile</a></span>
                </Menu.Item>
                {/* <Menu.Divider className="menu9" />
                <Menu.Item key="2" onClick={this.props.showDrawar}>
                    <Icon type="logout" />
                    <span><a style={{ color: '#757E82' }}>Settings</a></span>
                </Menu.Item> */}
                <Menu.Divider className="menu9" />
                <Menu.Item key="2">
                    <Icon type="logout" />
                    <span><a style={{ color: '#757E82' }}>Sign Out</a></span>
                </Menu.Item>

            </Menu>
        );

        return (
            <Header className='header' style={{ padding: '0px' }}>

                {this.showIcon ? <Image /> : null}

                {this.showBurgerMenu ? <Icon style={{ fontSize: '26px', color: '#FEF5F9',marginLeft:'1%' }}
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.collapsedClick}
                /> : null}

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
                </div>
            </Header>
        );
    }

}