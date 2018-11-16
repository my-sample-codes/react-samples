import React, { Component } from 'react';

import { Table, Popconfirm, Icon} from 'antd';
// import 'antd/dist/antd.css';
import './iconcss.css';
import './table.css';
  
class Tables extends Component {
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
        { 
          title: '', 
          dataIndex: '', 
          key: 'copyicon', 
          render: (text, record) => {
            return this.state.dataSource.length >= 1 ? (
              <Popconfirm
                title="Sure to copy?"
                onConfirm={() => this.handleDelete(record.key)}
              >
                <a href="javascript:;"></a>
                <Icon type="copy" className="iconsize"/>
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
        <Table className = "ant-table-thead" columns={columns}  dataSource={dataSource}/*  pagination={{ pageSize: 10 }} */ />
      );
    }
  }
  
  export default Tables;