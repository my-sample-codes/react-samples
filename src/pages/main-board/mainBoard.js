import React, { Component } from 'react';
import { Card, Col, Row, Button, Icon,Avatar  } from 'antd';
import axios from 'axios';
import HeaderDiv from './headerDiv'; 
import './mainBoard.css'; 

const { Meta } = Card;
//URL link to fetch all products
const getURL = "http://10.10.18.20:8080/recon/product/getlist/";


export default class mainBoard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          projects: []
        };
    }

    componentDidMount() {
        //get products present into database and store into list
        axios.get(getURL)
            .then(res => {
                    const projects = res.data;
                    this.setState({ projects });
            })
    }

    render(){
        
        return (
            <div>
                {/* top description header  */}
                <HeaderDiv/>
                
                {/* Card List Display */}
                <div className='cardList'> 
                    Recent Projects
                    
                    <Row gutter={16}>
                
                    <Col span={6}>
                
                        <Button type="dashed" size="large" className='newCardButton'>
                            < Icon type = "plus"  / ><br/>Add new product
                        </Button>
                    
                    </Col>

                    {/* map all products fetched from URL to card list view */}
                    { this.state.projects.map(project => 

                        <Col span={6}>
                            <Card hoverable bordered={true} bodyStyle={{height:'190px'}}>
                            <Meta
                                avatar={<Avatar src={project.productLogo} />}
                                title={<a>{project.productName}</a>}
                                description={project.productDescription}
                            />
                            </Card>
                        </Col>
                    
                    )}
              
                    </Row>
                </div>
            </div>
        )
          
    }
}