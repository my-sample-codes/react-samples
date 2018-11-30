import React, { Component } from 'react';
import { Divider, Layout, Drawer } from 'antd';
import ThemeColor from './ThemeColor';
import BlockChecbox from './BlockChecbox';


const Body1 = ({ children, title, style }) => (
    <div>
        <h3 >{title}</h3>
        {children}
    </div>
);


export default class SettingDrawar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            visible: false,
            drawarVisible: true,//this.props.visible,
            loadervisible: false,
            sourcedef: false,
            projects: []
        };
        this.showDrawar = this.showDrawar.bind(this);

        this.visible = this.props.visible;

        console.log("Drawar Props :: ",this.props);
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    changeSetting = (type, color) => {

        window.less
            .modifyVars({
                '@layout-header-background': color,
                '@primary-color': color,
            })
    }

    onClose = () => {

        console.log("drawar hide :: ")

        this.props.onClose();

        this.visible = false;

        this.setState({
            drawarVisible: false,
        });
    };

    showDrawar() {
        this.setState({
            drawarVisible: true,
        });
    }

    render() {

        console.log("Show Drawar Props::",this.visible)
        console.log("Show Drawar ::",this.state.drawarVisible)
        console.log("Show Drawar Props::",this.props.visible)

        this.visible = this.props.visible;

        this.state.drawarVisible = this.visible;

        return (

            <Layout>
                <div style={{ width: "300px" }}>

                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.drawarVisible}
                    >

                        <Body1 title="Page style setting">
                            <BlockChecbox
                                list={[
                                    {
                                        key: 'dark',
                                        url: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                                        title: "Dark",
                                    },
                                    {
                                        key: 'light',
                                        url: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                                        title: "Light",
                                    },
                                ]}
                                value="dark"
                                onChange={value => this.changeSetting('navTheme', value)}
                            />
                        </Body1>

                        <div className="content">
                            <ThemeColor
                                title="Theme Color"
                                value="#fff000"
                                onChange={color => this.changeSetting('primaryColor', color)}
                            />
                        </div>

                        <Divider />

                        <Body1 title="Navigation Mode">
                            <BlockChecbox
                                list={[
                                    {
                                        key: 'sidemenu',
                                        url: 'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
                                        title: 'Side Menu',
                                    },
                                    {
                                        key: 'topmenu',
                                        url: 'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
                                        title: 'Top Menu',
                                    },
                                ]}

                                onChange={value => this.changeSetting('layout', value)}
                            />
                        </Body1>
                    </Drawer>
                </div>

            </Layout>
        );

    }

}