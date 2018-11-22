import React, { Component } from 'react';
import { Card, Col, Row, Button, Icon, Avatar } from 'antd';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SourceDefinition from '../source-definition/SourceDefinition';
import CollectionCreateForm from '../popup-form/collection'
import HeaderDiv from './headerDiv';
import './mainBoard.css';
import Header from './../../layouts/header/index';
import SiderLayout from './../../layouts/layout2/SiderLayout';
const { Meta } = Card;
//URL link to fetch all products
const getURL = "http://10.11.14.79:8081/recon/product/getlist/";
const postURL = "http://10.11.14.79:8081/recon/product/save/";

export default class mainBoard extends Component {
    state = { visible: false, loadervisible: false, };
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

    render() {

        return (
            <div className='mainDiv'>
                <Header/>
            
                <div className='cardList'>

                {/* top description header  */}
                <HeaderDiv />

                {/* Card List Display */}
                
                    Recent Projects

                    <Row gutter={16}>

                        <Col span={5}>
                            <br/>
                            <Button type="dashed" size="large" className='newCardButton' onClick={this.showModal}>
                                < Icon type="plus" /><br />Add new product
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

                            <Col span={5}>
                                <Link to="/SourceDefinition"> 
                                    <Card hoverable bordered={true} bodyStyle={{ height: '130px' }}>
                                        <Meta
                                            avatar={<Avatar src={project.productLogo} />}
                                            title={<a>{project.productName}</a>}
                                            description={
                                                <div className='descriptionData'>{project.productDescription}</div>
                                                }
                                        />
                                    </Card>
                                 </Link> 

                            </Col>

                        )}

                    </Row>
                </div>
            </div>
        )

    }
}
