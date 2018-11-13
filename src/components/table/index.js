import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { Table, Popconfirm } from 'antd';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

class Tables extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: 'name',
        filters: [{ text: 'Jim Green', value: 'Jim Green' }, { text: 'DSK', value: 'DSK' }],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: 'age',
        sorter: (a, b) => a.age - b.age
      },
      {
        title: "Address",
        dataIndex: "address",
        key: 'address'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record) => {
          return this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a href="#">Delete</a>
            </Popconfirm>
          ) : null;
        },
      }
    ];

    this.state = {
      dataSource: [
        {
          key: 0,
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park',
          children: [{ key: 1311, name: 'Jim Green jr.', age: 25, address: 'London No. 3 Lake Park', },
          { key: 1312, name: 'Jimmy Green sr.', age: 18, address: 'London No. 4 Lake Park', },
          { key: 1313, name: 'MSK', age: 18, address: 'London No. 4 Lake Park', }],
        },
        {
          key: 1311,
          name: 'Jim Green jr.',
          age: 25,
          address: 'London No. 3 Lake Park',
          children: [{ key: 1321, name: 'Jim Green jr.', age: 25, address: 'London No. 3 Lake Park', },
          { key: 1322, name: 'Jimmy Green sr.', age: 18, address: 'London No. 4 Lake Park', },
          { key: 1323, name: 'MSK', age: 18, address: 'London No. 4 Lake Park', }],
        },
        {
          key: 1312,
          name: 'Jimmy Green sr.',
          age: 18,
          address: 'London No. 4 Lake Park'
        },
        {
          key: "1",
          name: "DSK King 1",
          age: "23",
          address: "London, Park Lane no. 1"
        }
      ],

    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <Table columns={columns} rowSelection={rowSelection} dataSource={dataSource} pagination={{ pageSize: 10 }} />
    );
  }
}

export default Tables;