import React, { Component } from 'react';

import { Table, Popconfirm, Icon, Card, Button} from 'antd';
// import 'antd/dist/antd.css';

import './tabscreen.css';
  
class tabscreen extends Component {
    constructor(props) {
      super(props);
      this.columns = [
        {
          title: "ID",
          dataIndex: "ID",
          key: 'ID', 
          
        },
        {
          title: "Source Name",
          dataIndex: "sourcename",
          key: 'sourcename',
        
        },
        {
          title: "Type",
          dataIndex: "type", 
          key: 'type'
        },
        {
            title: "Description",
            dataIndex: "description", 
            key: 'description'
        },
       
      ];
  
      this.state = {
        dataSource: [
          {
            ID: 101,    
            sourcename: 'Jim Green',        
            type: 'CSV',    
            description: 'First Data transaction recon ',
          },
          {
            ID: 110,    
            sourcename: ' Green',        
            type: 'CSV',    
            description: 'Customer Account information file ',
          },
         
          {
            ID: 103,    
            sourcename: 'Jimmy Green sr.', 
            type: 'CSV',      
            description: 'First Data transaction recon ',
          },
          {
            ID: 104,
            sourcename: "John",
            type: 'Custom',
            description: 'CSV files ',
          }
        ],
        
      };
    }
  
    render() {
      const { dataSource } = this.state;
      const columns = this.columns;
      return (

        
        <Card className="table-layout">
          
         
          <Table className = "ant-table-thead" columns={columns}  dataSource={dataSource} pagination={{ pageSize: 10 }}/>
          
          <Button className="proceed" type="primary">Proceed</Button>
        </Card>
      );
    }
  }
  
  export default tabscreen;
