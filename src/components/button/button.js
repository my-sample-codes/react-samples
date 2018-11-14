import React from 'react';
import 'antd/dist/antd.css';
import './button.css';
import { Button, Radio, Icon } from 'antd';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div className="button">
      
         <Button type="primary">Primary</Button>
        <Button>Default</Button>
         <Button className="dashed">Dashed</Button>
         <Button type="danger">Danger</Button>
      
      </div>
    );
  }
}

export default ButtonSize;