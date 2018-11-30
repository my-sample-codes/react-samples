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
            drawarVisible: this.props.visible,
            loadervisible: false,
            sourcedef: false,
            projects: []
        };
        this.showDrawar = this.showDrawar.bind(this);

        this.visible = this.props.visible;

        console.log("Drawar Props :: ",this.state.drawarVisible);
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    changeSetting = (type, color) => {

        window.less
            .modifyVars({
                '@layout-header-background': color,
                // '@primary-color': color,
            })
    }

    onClose = () => {
        this.props.onClose();
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

        this.state.drawarVisible = this.props.visible;

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