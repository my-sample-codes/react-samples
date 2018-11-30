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
            <Menu>
                <Menu.Item key="0" className="profileMenu">
                    <Icon type="profile" />
                    <span><a>Edit Profile</a></span>
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="1" className="profileMenu">
                    <Icon type="read" />
                    <span><a>View Profile</a></span>
                </Menu.Item>
                {/* <Menu.Divider/>
                <Menu.Item key="2" onClick={this.props.showDrawar} className="profileMenu">
                    <Icon type="logout" />
                    <span><a>Settings</a></span>
                </Menu.Item> */}
                <Menu.Divider/>
                <Menu.Item key="2" className="profileMenu">
                    <Icon type="logout" />
                    <span><a>Sign Out</a></span>
                </Menu.Item>
            </Menu>
        );

        return (
            <Header className='header'>

                {this.showIcon ? <Image /> : null}

                {this.showBurgerMenu ? <Icon className="burgerMenu"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.collapsedClick}
                /> : null}

                <div className="headerIcons" >
                    <Dropdown overlay={menu1} trigger={['click']}>
                        <a href="#">
                            <Icon type="bell"/>
                        </a>
                    </Dropdown>

                    <Dropdown overlay={menu2} trigger={['click']}>
                        <a href="#">
                            <Icon type="message"/>
                        </a>
                    </Dropdown>

                    <Dropdown overlay={menu3} trigger={['click']} onClick={this.showModal}>
                        <a href="#">
                            <Icon type="user"/>
                        </a>
                    </Dropdown>
                </div>
            </Header>
        );
    }

}