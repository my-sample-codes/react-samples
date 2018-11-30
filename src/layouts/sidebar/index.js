import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './sidebar.css'; 
const SubMenu = Menu.SubMenu;

class NavigationBar extends React.Component {

  constructor(props) { 
    super(props);


     this.test = "test";

    this.state = {
      openKeys: '',
      projects: []
    };

  }

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
    
    var projectArray = [];

    for (let j = 0; j < this.state.projects.length; j++) {

       

      console.log("PARAM NAME ::: ",this.props.param);
      console.log("STATE NAME ::: ",this.state.projects[j].productName);

      if(this.props.param === this.state.projects[j].productName){
        projectArray = [];
        projectArray.push(this.state.projects[j]);
      }
      
     // children.push(<td>{`Column ${j + 1}`}</td>)
    }

    console.log("STATE ARRAY::: ",this.state.projects);
    console.log("ARRAY ::: ",projectArray);


    return (
  <Link to="LayoutDefinition" style={{ textDecoration: 'none' }}>


      <Menu openKeys={[this.props.param]} theme="dark"  mode="inline"  /* openKeys={this.state.openKeys}  onOpenChange={this.onOpenChange} */>
      
            <Menu.Item key="1">
              <Link to="/MainBoard">
                  <Icon type="home" />
                   <span>Home</span>
              </Link>
            </Menu.Item>
         
          {
            projectArray.map(project=> 
          <SubMenu key = {project.productName} title={ <span id={project.productName}> <Icon type="gateway" /> <span>{project.productName}</span> </span> }>
          <Menu.Item key ="2"><Icon type="plus-circle-o"  /><span>New WorkFlow</span></Menu.Item>
          <SubMenu key="sub2" title="ETL">
         {/*  <Menu.Item key="3"><span>Samson ETL</span></Menu.Item> */}
          </SubMenu>
          <SubMenu key="sub3" title="Recon">
         {/*  <Menu.Item key="4"><span>Samson Recon</span></Menu.Item> */}
          </SubMenu>
          </SubMenu>
            )
          }
      
      </Menu>
      
    </Link>
     
 
    );
  }
}
export default NavigationBar;

