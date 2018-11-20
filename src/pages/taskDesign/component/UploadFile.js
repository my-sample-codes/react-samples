import React from 'react';
import { Upload, message, Button, Icon } from 'antd';

    const value = {
        name: 'file',
        action: '//jsonplaceholder.typicode.com/posts/',
        headers: {
          authorization: 'authorization-text',
        }
      
      };

class UploadFile extends React.Component{

    constructor(props){
        super(props);

        this.onSelect = this.onSelect.bind(this);
    }
   
    onSelect(info) {
        if (info.file.status !== 'uploading') {
            this.props.getFileName(info.file.name)
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
      
   
        render(){

            return (

                <Upload {...value} onChange = {this.onSelect}>
                <Button>
                  <Icon type="upload"/> Click to Upload
                </Button>
              </Upload>
            )
        };
}

export default UploadFile;