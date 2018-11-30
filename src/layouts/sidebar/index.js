import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './sidebar.less'; 
import SourceDefinition from './../../pages/source-definition/SourceDefinition';
import Image from './../../components/navbar-logo/image';
import MainBoard from './../../pages/main-board/mainBoard';
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

  /* onOpenChange = openKeys => {
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
  }; */

  componentDidMount() {
    
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
  <Link to="LayoutDefinition" style={{ textDecoration: 'none' }}>

      {/* <Link to="/Preview">
         <Menu.Item className="previewStyle"> <Icon type="appstore" /> Preview</Menu.Item>
          </Link> */}
      <Menu  theme="dark"  mode="inline"  /* openKeys={this.state.openKeys}  onOpenChange={this.onOpenChange} */>
      
      <Menu.Item key="1">
<Link to="/MainBoard">
<Icon type="home" />
<span>Home</span>
</Link>
</Menu.Item>
          
          

     {/* <div className="imgLogo">
      <Image/>
     </div> */}
          
        <SubMenu key="sub1"  title={ <span> <Icon type="appstore" /> <span>Projects</span> </span> } >  
          {
            this.state.projects.map(project=>
          <Menu.Item>{project.productName}</Menu.Item>
            )
          }
      
        </SubMenu> 
       
        <SubMenu key="sub2"  title={ <span> <Icon type="reconciliation" /> <span>Recon</span> </span> } >
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



 {/* Preview as menu item with icon
          <Menu.Item><Icon type="pic-center"/>Preview</Menu.Item> */}
          {/* Normal menu item without icon */}
          {/* <Link to="/Preview">
         <Menu.Item className="previewStyle"> <Icon type="appstore" /> Preview</Menu.Item>
          </Link> */}
          {/* Preview css self written class spa
          <div className="spa"><Icon type="pic-center" className = "icon"/>Preview</div> */}
       