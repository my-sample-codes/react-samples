import React, { Component } from 'react';
import ETL from './../../assets/icons/etl.png';
import Reconciliation from './../../assets/icons/reconciliation.png';
import LayoutDefinition from '../layout-definition/LayoutDefinition';
import { BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';
import ReconForm from '../popup-form/recon-popup';
import ETLForm from '../popup-form/EtlPopup';
import './FlowType.css';
import ReconFlow from '../recon-flow/ReconFlow';

class SelectFlowType extends Component {

    state = { 
        visible: false,
        visibleETL: false,
        next:false,
        nextETL: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    showModal1 = () => {
        this.setState({
            visibleETL: true,
        });
    }

    handleCancel = () => {
        const form = this.formRef.props.form;
        this.setState({ visible: false });
        form.resetFields();
    }

    handleCancelETL = () => {
        const form = this.formRef.props.form;
        this.setState({ visibleETL: false });
        form.resetFields();
    }
    
    handleCreate = () => {
        /* const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            this.setVal(values);
            form.resetFields();
            this.setState({ visible: false });

        }); */
        this.setState({ next:true });  
    }

    handleCreateETL = () => {
        this.setState({ nextETL:true });
    }

    saveFormRef = (formRef) => { this.formRef = formRef; }

    render() {

        if(this.state.next) {
            return <Redirect to="/ReconFlow"/>
        }

        if(this.state.nextETL) {
            return <Redirect to="/SourceDefinition"/>
        }

        return (
            <div>
                 <div className="titleDiv">
                    <h1>Select flow type:</h1>
                </div>

                <div className="selectType">
                    <div>
                       <div onClick={this.showModal1}>
                            <div className="typeDiv">
                                <img src={ETL} alt='ETL' /><br /><br />
                                <h3>ETL</h3>
                            </div>
                       </div>
                    </div>

                    <div onClick={this.showModal}>
                        <div className="typeDiv">
                            <img src={Reconciliation} alt='Reconciliation' /><br /><br />
                            <h3>Reconciliation</h3>
                        </div>
                    </div>
                </div>
                
                <ReconForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}/>

                <ETLForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visibleETL}
                onCancel={this.handleCancelETL}
                onCreate={this.handleCreateETL}/>
            </div>    
          );
    }
}
export default SelectFlowType;
