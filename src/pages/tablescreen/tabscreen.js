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
        title: "Customer Account",
        dataIndex: "ID",
        key: 'ID',

      },
      {
        title: "Customer Name",
        dataIndex: "sourcename",
        key: 'sourcename',

      },
      {
        title: "Transaction ID",
        dataIndex: "type",
        key: 'type'
      },

      {
        title: "Transaction Amount",
        dataIndex: "ID",
        key: 'ID',

      },
      {
        title: "Transaction Ref#",
        dataIndex: "type",
        key: 'ID',

      },

    ];

    this.state = {
      dataSource: [
        {
          ID: 101,
          sourcename: 'Jim Green',
          type: '1111',
          description: 'First Data transaction recon ',
        },
        {
          ID: 110,
          sourcename: ' Green',
          type: '48558',
          description: 'Customer Account information file ',
        },
        {
          ID: 111,
          sourcename: 'Jim Green',
          type: '4846',
          description: 'CSV files  ',
        },
        {
          ID: 112,
          sourcename: 'Jim Green',
          type: '4647',
          description: 'First Data transaction recon ',
        },
        {
          ID: 113,
          sourcename: 'Jim Green',
          type: '49878',
          description: 'CSV files ',
        },
        {
          ID: 102,
          sourcename: 'Jim Green jr.',
          type: '48945',
          description: 'Transaction Load File ',
        },
        {
          ID: 103,
          sourcename: 'Jimmy Green sr.',
          type: '4684',
          description: 'First Data transaction recon ',
        },
        {
          ID: 104,
          sourcename: "John",
          type: '78924',
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
        <Link to="/TaskDesign">
          <Button type="primary">Back</Button>
        </Link>
      </Card>
    );
  }
}

export default tabscreen;
