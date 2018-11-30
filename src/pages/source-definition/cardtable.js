import React, { Component } from 'react';
import { Card, Icon, Popover, Table,Popconfirm,Row,Col} from 'antd';
import Tables from './dupETLTable';
import { Input } from 'antd';
import './SourceDefinition.less';

const Search = Input.Search;
var hoverContent = require('./../infomapper.js').default;
class CardTable extends Component 
{
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
                <Icon type="copy" className="iconSize"  theme="filled" style={{cursor:'pointer'}}/>
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
    render() 
    {
      return (
        <Card className="cardTableStyle">
          <Row>
            <Col span={5}>
              <h2 className="subHeading2">Duplicate ETL Jobs</h2>
            </Col>
            <Col span={14}>
              <Popover placement="right" title="Datasets"
                content={hoverContent.maparray.duplicate_etl_jobs}
              >
                <Icon className="icons infoIcon" type="question-circle"/>
              </Popover>
            </Col>
            <Col span={4}>
              <Search
                placeholder="Search Source Name"
                onSearch={value => console.log(value)}
                className="searchStyle"
              />
            </Col>
          </Row>
          <Tables />
        </Card>
      );
    }
}

export default CardTable;