import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Select, Card, Input, Button, Table, Divider, Tag, Steps, Breadcrumb } from 'antd';
import DashboardLand from './pages/dashboard-landing/DashboardLand';
import BackgroundImg from './../src/pages/login/loginimg.png';
import 'antd/dist/antd.css';
import './../src/pages/login/index.css';
import './../src/pages/login/Login.css';
import Routes from './pages/routes/Routes';

import { Layout, Drawer } from 'antd';
import ThemeColor from './pages/main-board/ThemeColor';
import BlockChecbox from './pages/main-board/BlockChecbox';


const Body1 = ({ children, title, style }) => (
    <div
      
    >
      <h3 >{title}</h3>
      {children}
    </div>
  );


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            visible: false,
            drawarVisible: false,
            loadervisible: false, 
            sourcedef:false,
            projects: []
          };
       this.showDrawar = this.showDrawar.bind(this);   
      }

      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      }
    
      changeSetting = (type,color) => {
    
        window.less
        .modifyVars({
          '@layout-header-background': color,
          '@primary-color': color,
        })
        
      }
    
      onClose = () => {
        this.setState({
            drawarVisible: false,
        });
      };

      showDrawar(){

        console.log("CALLED :: ")

        this.setState({
            drawarVisible: true,
          });
      }

    render() {
        return (
            <div className="Main">
              <Routes click={this.showDrawar}/>

              <Layout>
            <div style={{width:"300px"}}>

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
              value = "dark"
              onChange={value => this.changeSetting('navTheme', value)}
            /> 
          </Body1>

            <div className = "content">
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

            </div>
          );
    }
}
export default App;
