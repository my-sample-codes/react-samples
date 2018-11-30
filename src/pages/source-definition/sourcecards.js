import React, { Component } from 'react';
import { Card, Col, Row, Layout, Icon, Upload, message } from 'antd';
import './SourceDefinition.less'

const { Content } = Layout;
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


class SourceCards extends Component {

  render() {
    return (
      <Content >
        <div className="cardsBackground">
          <tr>
            <Row gutter={16}>
              <Col span={7}>

                <Upload {...props}>
                  <div className="iconDiv">
                    <Icon className="cardIcons" type="file-text" />
                  </div>
                  <Card className="styleCards" bordered={true}>
                    Create Configuration for CSV file Sources
                    </Card>

                </Upload>
              </Col>

              <Col span={7} className="sourceCardsDiv">

                <Upload {...props}>
                  <div className="iconDiv">
                    <Icon className="cardIcons" type="file-text" />
                  </div>
                  <Card className="styleCards" bordered={true}>
                    Create configuraion for excel file sources
                        </Card>
                </Upload>

              </Col>
              <Col span={7} className="sourceCardsDiv">
                <Upload {...props}>
                  <div className="iconDiv">
                    <Icon className="cardIcons" type="file-text" />
                  </div>
                  <Card className="styleCards" bordered={true}>Browse repo / marketplace for more
                  </Card>
                </Upload>

              </Col>

            </Row>

          </tr>
        </div>
      </Content>

    );
  }
}

export default SourceCards;

