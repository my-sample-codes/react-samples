import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './sidebar.css'; 
import SourceDefinition from './../../pages/source-definition/SourceDefinition';
import Image from './../../components/navbar-logo/image';

const SubMenu = Menu.SubMenu;

class NavigationBar extends React.Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub3"];

  constructor(props) { 
    super(props);
    this.state = {
      openKeys: ["sub1"],
      projects: []
    };
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  componentDidMount() {
    // axios.get("http://10.11.14.80:8081/recon/product/getlist/")
    //     .then(res => {
    //                   const projects = res.data;
    //                   console.log(res.data);
    //                   this.setState({ projects });
    //                   }
    //     )

    fetch("http://10.11.14.79:8081/recon/product/getlist/")
    .then(res => res.json())
    .then(
      (result) => {
        console.log("Result::",result)
        this.setState({
            projects: result
          });
      },
      
      (error) => {
        console.log("Cannot fetch product list");
        console.log(error);
      }
    )
  } 

  render() {
    return (
  <Link to="SourceDefinition">
      <Menu  theme="dark"  mode="inline"  openKeys={this.state.openKeys}  onOpenChange={this.onOpenChange}>
     <div className="imgLogo">
      {/* <Image/> */}
     </div>
        <SubMenu className="menus" key="sub1"  title={ <span> <Icon type="appstore" /> <span>Projects</span> </span> } >  
     
       
          {
            this.state.projects.map(project=>
          <Menu.Item>{project.productName}</Menu.Item>
            )
          }
          {/* Preview as menu item with icon
          <Menu.Item><Icon type="pic-center"/>Preview</Menu.Item> */}
          {/* Normal menu item without icon */}
          <Link to="/Preview">
         <Menu.Item className="previewStyle"> <Icon type="appstore" /> Preview</Menu.Item>
          </Link>
          {/* Preview css self written class spa
          <div className="spa"><Icon type="pic-center" className = "icon"/>Preview</div> */}
       
     
        </SubMenu> 
       
        <SubMenu key="sub2"  title={ <span> <Icon type="appstore" /> <span>Recon</span> </span> } >
          {
            this.state.projects.map(project=>
              <Menu.Item>{project.productName}</Menu.Item>
            )
          }
        </SubMenu>
      
      </Menu>
      
    </Link>
     
 
    );
  }
}
export default NavigationBar;