import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select, Steps} from 'antd';
import Img from './../../assets/images/flowDig.png';
import './ReconFlow.less'
import ReconProcess1 from './../modal-forms/ReconProcess1';
import ReconProcess2 from './../modal-forms/ReconProcess2';

const Step = Steps.Step;
const Option = Select.Option;

export default class ReconFlow extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: '' };
        this.handleOk = this.handleOk.bind(this);
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        this.setState({
          visible: "two",
        });
      }
    handleCancel = () => {
    this.setState({ visible: false });
    }
    handleModal = (e) => {
        this.setState({
          visible: false,
        });
      }

    render(){
        const modalview = this.state.visible;
        console.log(modalview);
        return(
            <div>
                <img className='taskDesign' src={Img} />
                <div className="clickableDiv" onDoubleClick={this.showModal}></div>
                {!(modalview === "two") ? (
                    <div>
                        <ReconProcess1
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel} />
                    </div>
                ) : (<div>
                    <ReconProcess2
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onOk={this.handleModal} />
                </div>)}
            </div>
        )
    }
}