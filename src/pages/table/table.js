import React, { Component } from 'react';
import TaskDesign from './../taskDesign/taskDesign';
import { Table, Popconfirm, Icon, Card, Button} from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import 'antd/dist/antd.css';
import './table.css';
  
class Tables extends Component {
    constructor(props) {
      super(props);
      this.columns = [
        {
          title: "ID",
          dataIndex: "ID",
          key: 'ID', 
          // height:'5%'
        },
        {
          title: "Source Name",
          dataIndex: "sourcename",
          key: 'sourcename',
          width:'18%',
          
          // height:'5%'
        },
        {
          title: "Type",
          dataIndex: "type", 
          key: 'type',
          width:'12%',
        },
        {
            title: "Description",
            dataIndex: "description", 
            key: 'description'
        },
        { 
          title: 'Actions', 
          dataIndex: 'actions', 
          key: 'copyicon', 
          render: (text, record) => {
            return this.state.dataSource.length >= 1 ? (
              <Popconfirm
                title="Sure to copy?"
                onConfirm={() => this.handleDelete(record.key)}
              >
                <a href="javascript:;"></a>
                <Icon type="copy" className="iconsize" size='3%'/>
              </Popconfirm>
            ) : null;
        },
      }
      ];
  
      this.state = {
        dataSource: [
          {
            ID: 101,    
            sourcename: 'Jim Green',        
            type: 'CSV',    
            description: 'Customer Account information file ',
            
          },
          {
            ID: 102,    
            sourcename: 'Jim Green jr.',   
            type: 'Fixed',      
            description: 'Transaction Load File ',
          },
          {
            ID: 103,    
            sourcename: 'Jimmy Green sr.', 
            type: 'CSV',      
            description: 'First Data transaction recon ',
          },
          {
            ID: 104,
            sourcename: "DSK King 1",
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
          <Card className="card">
            <p>Card content</p>
          </Card>
          <Table size="middle" className = "ant-table-thead" columns={columns}  dataSource={dataSource} pagination={{ pageSize: 10 }} size="small" bordered/>
        <Link to="TaskDesign"> 
          <Button className="proceed" type="primary">Proceed</Button>
          </Link> 
          <Button className="proceed" type="primary">Close</Button>
        
        </Card>
      );
    }
  }
  
  export default Tables;