import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Table, Popconfirm, Icon, Card, Button } from 'antd';
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
          ID: 111,
          sourcename: 'Jim Green',
          type: 'CSV',
          description: 'CSV files  ',
        },
        {
          ID: 112,
          sourcename: 'Jim Green',
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
        <Link to="/TaskDesign">
          <Button type="primary" value="small" className="proceed1">Upload</Button>
        </Link>
        <Link to="/tablescreen1">
          <Button type="primary" value="small" className="proceed2" type="primary">Parsed</Button>
        </Link>
        <Link to="/tablescreen2">
          <Button type="primary" value="small" className="proceed3" type="primary">Error</Button>
        </Link>


        <Table className="ctable" columns={columns} dataSource={dataSource} pagination={{ pageSize: 10 }} />

        <Button className="proceed" type="primary">Proceed</Button>
      </Card>
    );
  }
}

export default tabscreen;
