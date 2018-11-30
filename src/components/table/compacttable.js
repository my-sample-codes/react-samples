import React, { Component } from 'react';
import { Table } from 'antd';
import './CompactTable.less';

class CompactTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.dataSource,
      columns: this.props.columns,

    };
  }

  render() {
    //console.log('In compatible' , this.props.dataSource)
    return (
        <Table className="customTable" columns={this.props.columns} dataSource={this.props.dataSource}  size="small" bordered="true" />
    );

  }
}

export default CompactTable;