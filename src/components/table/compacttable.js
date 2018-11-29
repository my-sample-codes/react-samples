import React, { Component } from 'react';
import { Table } from 'antd';
import './compacttable.css';

class Compacttable extends Component {
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
      <div>

        <Table className="ctable" columns={this.props.columns} dataSource={this.props.dataSource}  size="small" bordered="true" />

      </div>
    );

  }
}

export default Compacttable;