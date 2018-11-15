import React, { Component } from 'react';
import { Card, Col, Row, Button, Icon, Avatar } from 'antd';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SourceDefinition from '../source-definition/SourceDefinition';
import CollectionCreateForm from '../popup-form/collection'
import HeaderDiv from './headerDiv';
import './mainBoard.css';


const { Meta } = Card;
//URL link to fetch all products
const getURL = "http://10.10.18.20:8080/recon/product/getlist/";
const postURL = "http://10.10.18.20:8080/recon/product/save/";

/* const getURL = "http://10.11.14.80:8081/recon/product/getlist/";
const postURL = "http://10.11.14.80:8081/recon/product/save/"; */

export default class mainBoard extends Component {
    state = { visible: false, loadervisible: false, };
    // Performing a POST request
    setVal(values) {
        axios.post(postURL,
            {
                productName: values.title,
                productDescription: values.description,
                productId: values.ProjectID,
                documentType: values.document_type,
                headerPresent: values.headerSet
            }).then(function (response) {
                console.log('saved successfully', response);
                if (response.status == 200) {
                    setTimeout(() => this.setState({ loadervisible: false }), 800);
                    // this.setState({loadervisible: false});
                    console.log("in IF");
                }
            }.bind(this));
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
        //get products present into database and store into list
        axios.get(getURL)
            .then(res => {
                const projects = res.data;
                this.setState({ projects });
            })
    }

    componentDidUpdate() {
        this.getProductData();
    }

    componentDidMount() {
        this.getProductData();
    }

    render() {

        return (
            <div>
                {/* top description header  */}
                <HeaderDiv />

                {/* Card List Display */}
                <div className='cardList'>
                    Recent Projects

                    <Row gutter={16}>

                        <Col span={6}>
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

                            <Col span={6}>
                                <Link to="/SourceDefinition" >
                                    <Card hoverable bordered={true} bodyStyle={{ height: '170px' }}>
                                        <Meta
                                            avatar={<Avatar src={project.productLogo} />}
                                            title={<a>{project.productName}</a>}
                                            description={project.productDescription}
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