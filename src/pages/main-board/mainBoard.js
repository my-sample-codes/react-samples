import React, { Component } from 'react';
import { Card, Col, Row, Button, Icon, Avatar,Dropdown,Menu } from 'antd';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import SourceDefinition from '../source-definition/SourceDefinition';
import CollectionCreateForm from '../popup-form/collection'
import HeaderDiv from './headerDiv';
import './MainBoard.less';
import Header from './../../layouts/header/index';
import SiderLayout from './../../layouts/layout2/SiderLayout';
import flowtype from './../select-flow-type/selflowtype';

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
export default class mainBoard extends Component {
    state = { visible: false,
              loadervisible: false, 
              sourcedef:false
            };
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
    handleCancel = () => {
        const form = this.formRef.props.form;
        this.setState({ visible: false });
    form.resetFields();}
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
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

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
    onClose = () => {
        console.log("Main CLOSE :::")  
        this.setState({
            drawarVisible: false,
        });
      };

      showDrawar(){
        this.setState({
            drawarVisible: true,
          });
          console.log("Main Board called :: ",this.state.drawarVisible);      
      }
    render() {

        if (this.state.sourcedef === true) {
            return <Redirect to='/flowtype' />
          }

        return (
            <div className='mainDiv'>
                <Header  click = {this.showDrawar} hide = {this.onClose}/>
               
                <div className='contentDiv'>
                    <HeaderDiv />
                </div>

                <div className='contentDiv'>
                    <h4>Your Projects</h4>
                    <Row gutter={16}>
                        <Col span={7}>
                            <Button size="large" className='newProjectButton' onClick={this.showModal}>
                                < Icon className="addIcon" type="plus" /><br />Add project
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
                                    <Link to="/flowtype">
                                        <Meta className="projectDetails"
                                            title={<p>{project.productName}</p>}
                                            description={
                                                <div className='descriptionData'>{project.productDescription}</div>
                                            }
                                        />
                                    </Link>
                                    <div className="menulist" >
                                        <Dropdown overlay={menu1} placement="bottomRight" trigger={['click']}>
                                            <ul className="menuIconStyle ant-card-actions">
                                                <li>
                                                    <Icon type="ellipsis" className="menuIcon" />
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        )
    }
}
