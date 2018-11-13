import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class NavigationBar extends React.Component {

  render() {
    return (

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Mgmt-Console</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="reconciliation" />
              <span>Dashboard</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="home" /><span>Workflow</span></span>}
            >             
              <Menu.Item key="3">Define Source</Menu.Item>
            </SubMenu>
            {/* <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file"/>
              <span>File</span>
            </Menu.Item>
           */}
          </Menu>

    );
  }
}
export default NavigationBar;