import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon , Divider, Card, Col, Row, Badge } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './LayoutDesign.css'

import bgImgBox1 from '../../images/defineSource.png'
import bgImgBox2 from '../../images/buildWorkflow.png'
import bgImgBox3 from '../../images/administerTasks.png'
import bgImgBox4 from '../../images/runningJobs.png'

const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class LayoutDesign extends Component {
    state = {
        collapsed: false,
    };
    
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['3']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <Menu.Item key="0">
                            <Icon type="ant-design" />
                            <span><strong>Recon Designer v0.2</strong></span>
                        </Menu.Item>
                        <Divider className="divider-horizontal" type="horizontal" />
                        <SubMenu key="sub0"
                            title={<span><Icon type="user" /><span>Ramkumar</span></span>}
                        >
                            <Menu.Item key="2">
                                <Icon type="profile" />
                                <span>Profile</span>
                            </Menu.Item>
                        </SubMenu>
                        <Divider className="divider-horizontal" type="horizontal" />
                        <SubMenu key="sub1"
                            title={<span><Icon type="appstore" /><span>Dashboard</span></span>}
                        >
                            <Menu.Item key="3">
                                <Icon type="home" />
                                <span>Home</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="solution" />
                                <span>Monitoring Tasks</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2"
                            title={<span><Icon type="area-chart" /><span>ETL Job</span></span>}
                        >
                            <Menu.Item key="5">
                                <Icon type="setting" />
                                <span>Workflow</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3"
                            title={<span><Icon type="table" /><span>Administer</span></span>}
                        >
                            <Menu.Item key="6">
                                <Icon type="setting" />
                                <span>Workflow</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4"
                            title={<span><Icon type="audit" /><span>Reports</span></span>}
                        >
                            <Menu.Item key="7">
                                <Icon type="audit" />
                                <span>Report</span>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ background: '#F0F2F5' }}>
                    <Content style={{ margin: '0 16px' }}>

                        <div >
                            <div style={{float: 'left'}} >
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                            </Breadcrumb>
                            </div>
                            <div style={{float: 'right', }}>
                                <Icon type="bell" style={{ margin: '16px 20px'}} />
                            </div>
                        </div>
                    
                        <Divider type="horizontal" />
                        <div style={{ padding: 2, background: '#F0F2F5', minHeight: 520 }}>

                            <div style={{ background: '#F0F2F5', padding: '30px', margin: '25px' }}>
                                <Row gutter={66}>
                                    <Col span={10} style={{ borderRadius: '50px' }}>
                                        <Card title="Define Source" bordered={false} style={{ minHeight: '167px' }}><span><img className="info_img" src={ bgImgBox1 } /><span>Define, transform and import using standard templates for csv, text, excel, pdf, etc.</span></span></Card>
                                    </Col>

                                    <Col span={3}></Col>

                                    <Col span={10}>
                                        <Card title="Build Workflow" bordered={false} style={{ minHeight: '167px' }}><span><img className="info_img" src={ bgImgBox2 } /><span>Build workflow involving decision tree, validations, aggregation and load to desired destination.</span></span></Card>
                                    </Col>
                                </Row>
                            </div>

                            <div style={{ background: '#F0F2F5', padding: '30px', margin: '25px' }}>
                                <Row gutter={66}>

                                    <Col span={10}>
                                        <Card title="Administer" bordered={false} style={{ minHeight: '167px' }}><span><img className="info_img" src={ bgImgBox3 } /><span>Deploy tasks and configure schedule. View scheduled, running and failed jobs waiting for dependencies, etc.</span></span></Card>
                                    </Col>

                                    <Col span={3}></Col>

                                    <Col span={10}>
                                        <Card title="Tasks  Reports" bordered={false} style={{ minHeight: '167px' }}><span><img className="info_img" src={ bgImgBox4 } /><span>View business dashboards, reports, view matching exceptions, etc.</span></span></Card>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default LayoutDesign;