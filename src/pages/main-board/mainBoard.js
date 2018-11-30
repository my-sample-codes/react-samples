import React, { Component } from 'react';
import { Card, Col, Row, Icon, Avatar,Dropdown,Menu } from 'antd';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import SourceDefinition from '../source-definition/SourceDefinition';
import CollectionCreateForm from '../popup-form/collection'
import HeaderDiv from './headerDiv';
import './mainBoard.css';
import Header from './../../layouts/header/index';
import MenuIcon from './menuIcon.png';
import SiderLayout from './../../layouts/layout2/SiderLayout';

import { Layout, Tag, Button, Drawer, Divider } from 'antd';
//import ThemeColor from './ThemeColor';
//import BlockChecbox from './BlockChecbox';

import SettingDrawar from './../../components/setting-drawar/index'

const { Meta } = Card;
//URL link to fetch all products
const getURL = "http://10.11.14.79:8081/recon/product/getlist/";
const postURL = "http://10.11.14.79:8081/recon/product/save/";

const menu1 = (
    <Menu className="menu">
        <Menu.Item key="0">
            <a >Duplicate</a>
        </Menu.Item>
        <Menu.Divider className="menu9" />
        <Menu.Item key="1">
            <a >Delete</a>
        </Menu.Item>

    </Menu>
);

const Body1 = ({ children, title, style }) => (
    <div
      
    >
      <h3 >{title}</h3>
      {children}
    </div>
  );

export default class mainBoard extends Component {


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
       this.setHide = this.setHide.bind(this);
      }

      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      }
    
      changeSetting = (type,color) => {
    
        window.less
        .modifyVars({
          '@layout-header-background': color,
          //'@primary-color': color,
        })
        
      }
    
      onClose = () => {  
        this.setState({
            drawarVisible: false,
        });
      };

      showDrawar(){
        this.setState({
            drawarVisible: true,
          });
      }
    // Performing a POST request
    setVal(values) {
        //using axios::
        // axios.post(postURL,
        //     {
        //         productName: values.title,
        //         productDescription: values.description,
        //         productId: values.ProjectID,
        //         documentType: values.document_type,
        //         headerPresent: values.headerSet
        //     }).then(function (response) {
        //         console.log('saved successfully', response);
        //         if (response.status == 200) {
        //             setTimeout(() => this.setState({ loadervisible: false }), 800);
        //             // this.setState({loadervisible: false});
        //             this.getProductData();
        //         }
        //     }.bind(this));


        //using simple fetch
        fetch(postURL, {
            method: 'POST',
          //  mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
              //   'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify({

                productName: values.title,
                productDescription: values.description,
                productId: values.ProjectID,
                documentType: values.document_type,
                headerPresent: values.headerSet

            })
            }).then(response => {
                console.log('saved successfully', response);
                if (response.status == 200) {
                    setTimeout(() => this.setState({ loadervisible: false }), 800);
                    // this.setState({loadervisible: false});
                    this.getProductData();
                }
            }).catch(err => err);

    }
    showModal = () => { this.setState({ visible: true }); }
    handleCancel = () => { this.setState({ visible: false }); }
    handleCancel1 = () => { this.setState({ loadervisible: false }); }
    
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            this.setState({ visible: false });
            this.setState({ loadervisible: true });
            this.setVal(values);
            form.resetFields();
            this.setState({sourcedef:true});

        });
    }
    saveFormRef = (formRef) => { this.formRef = formRef; }

    // CARDS
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         projects: []
    //     };
    // }

    getProductData() {
        // get products present into database and store into list
        // Using  Axios
        // axios.get(getURL)
        //     .then(res => {
        //         const projects = res.data;
        //         this.setState({ projects });
        //         console.log(projects);
        //     })

        // Using Fetch Api
            fetch(getURL)
            .then(res => res.json())
            .then(
              (result) => {
                console.log("result>>>>>>>>>>>>>>>>>",result)
                this.setState({
                    projects: result
                  });
              },
              (error) => {
                console.log("error in get product list");
                console.log(error);
              }
            )
    }

    componentDidMount() {
        this.getProductData();
    }

    setHide(){
        this.setState({
            drawarVisible: false,
          });
    }

    render() {

        if (this.state.sourcedef === true) {
            return <Redirect to='/SourceDefinition' />
          }

        return (
            <div className='mainDiv'>
                <Header click = {this.showDrawar} hide = {this.onClose}/>
                <div className='cardList'>
                    <HeaderDiv />
                </div>
                <div className='cardList'>

                {/* top description header  */}
                

                {/* Card List Display */}
                
                <div>
                        Your Projects
                    </div>

                    <Row gutter={16} className='cardRow'>

                        <Col span={7}>
                            <Button size="large" className='newCardButton' onClick={this.showModal}>
                                < Icon className="addIcon" type="plus"/><br />Add project
                            </Button>
                            <CollectionCreateForm
                                // Modal 1 for "New Project" Form
                                wrappedComponentRef={this.saveFormRef}
                                visible={this.state.visible}
                                onCancel={this.handleCancel}
                                onCreate={this.handleCreate}
                                //Modal 2 for Spinner
                                visible1={this.state.loadervisible}
                                onCancel1={this.handleCancel1}
                                onCreate2={this.handleCreate2} />

                        </Col>

                        {/* map all products fetched from URL to card list view */}
                        {this.state.projects.map(project =>

<Col span={7}>
                                
                                    <Card className="projectCards" hoverable bordered={true}>
                                    <Link to="/LayoutDefinition"> 
                                        <Meta style={{height:'-webkit-fill-available'}}
                                            title={<a className="projectName">{project.productName}</a>}
                                            description={
                                                <div className='descriptionData'>{project.productDescription}</div>
                                                }
                                        />
                                        </Link>
                                        <div className="menulist" >
                                        <Dropdown overlay={menu1} placement="bottomRight" trigger={['click']} style={{left:'625px'}}>
                                            <ul className="ant-card-actions customStyle">
                                                <li>
                                                   <Icon type="ellipsis" className="menuIcon"/>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                        </div>
                                    </Card>
                                  

                            </Col>

                        )}

                    </Row>
                </div>
                <SettingDrawar visible = {this.state.drawarVisible} onClose = {this.setHide}/>
            </div>
        )

    }
}
