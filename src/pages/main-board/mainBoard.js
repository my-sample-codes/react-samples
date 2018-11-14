import React, { Component } from 'react';
import { Card, Col, Row, Button, Icon,Avatar  } from 'antd';
import axios from 'axios';
// import styles from './mainBoard.less'; 
import styles from './mainBoard.css'; 

const { Meta } = Card;

export default class LayoutDefinition extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          projects: []
        };
    }

    componentDidMount() {
          axios.get(`http://10.10.18.12:8080/projects`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
      }

    render(){

        
            return (
                <div className={styles.cardList}> 
                <Row gutter={16}>
                
                <Col span={7}>
                <Card hoverable bordered={false} bodyStyle={{height:'200px'}}>
                    <Button type="dashed" size="large" block="true">
                        < Icon type = "plus"  / >Add new product
                    </Button>
                    </Card>
                </Col>

              
                { this.state.projects.map(project => 

                    <Col span={7}>
                        <Card hoverable bordered={false} bodyStyle={{height:'200px'}}>
                        <Meta
                            avatar={<Avatar src={project.iconLink} />}
                            title={project.title}
                            description={project.description}
                        />
                        </Card>
                    </Col>
                    
                )}
              
              </Row>
              </div>
            )
          
    }
}