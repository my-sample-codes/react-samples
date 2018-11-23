import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import BackgroundImg from './login_background_img.svg';
import Dashboard from '../dashboard-landing/DashboardLand';
// import logo from './logo-blue.png'
import logo from './logo.png';
import logo1 from './logo-blue.png';
import 'antd/dist/antd.css';
import '../../index.css';
import './Login.css';

const FormItem = Form.Item;

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            validate: false,
            error_msg: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //Please put your backend url
        //Local
        //var apiBaseUrl = "http://localhost:8090/SpringBootApplicationRestApi/api/"
        //Other Machine Local
        // var apiBaseUrl = "http://10.10.18.20:8080/recon/"
        //VM Machine
        var apiBaseUrl = "http://10.11.14.79:8081/recon/"

        this.props.form.validateFields((err, values) => {
            if (!err) {
                //Please used below password & userName variable for POJO class
                console.log('Received values of form: ', values);
                console.log('Received values of form: ', values.password);
                console.log('Received values of form: ', values.userName);
                console.log("Object", values)

                fetch(apiBaseUrl + 'login', {
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    method: "POST",
                    body: JSON.stringify({ userName: values.userName, password: values.password })
                })

                // POST method for login 
                // axios.post(apiBaseUrl + 'login', values)
                .then(function (response) {                   
                    console.log("All Response - ", response);
                    console.log(JSON.stringify(response));
                    console.log("Response Status Code - ", response.status)
                    
                    if (response.status === 302) {
                        console.log("Login successfull");              
                        this.setState({ validate: true });
                        this.setState({ error_msg: false });
                        console.log("After return",this.state.validate);
                    }
                    else if (response.status === 404) {
                        console.log("Username password do not match");
                        this.setState({ validate: false });
                        this.setState({ error_msg: true });
                    }
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const isValidated = this.state.validate;
        const isErrorMsg = this.state.error_msg;
        return (
            <div style={{overflow:'hidden'}}>
                {!isValidated ? (
                    <div >
                        <img className='bg' src={BackgroundImg} />
                        <div style={{marginBottom:'9%'}}>
                            <div>
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <div>
                                        <div className="container-heading" >
                                            <div className="container">
                                                <img alt="logo" src={logo} />
                                            </div>
                                            <div className="text-title-container">
                                                <span className="nor-div-title" >Optimus</span>
                                            </div>
                                        </div>
                                    </div>
                                    {!isErrorMsg ? (<div></div>) : (<Alert style={{ marginTop: '46px' }} message={'Invalid username or password'} type="error" showIcon />)}
                                    <FormItem className='loginFormItem'>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Please enter username!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder=" Username" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please enter password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder=" Password" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        <div>
                                            <div className="login-form-checkbox">
                                                {getFieldDecorator('remember', {
                                                    valuePropName: 'checked',
                                                    initialValue: true,
                                                })(
                                                    <Checkbox>Remember me</Checkbox>
                                                )}
                                            </div>
                                            <div className="login-form-forgot"><span>
                                                {/* <Icon className="icon-size" type="lock" /> */}
                                                <span>
                                                <a href="#forgotPass">Forgot your password?</a></span></span>
                                            </div>
                                        </div>
                                        <Button type="primary" htmlType="submit" onClick={this.handleClick} className="login-form-button">
                                            Login
                                        </Button>
                                    </FormItem>
                                </Form>
                            </div>
                            {/* <div className="container-all">
                                <img alt="logo1" src={logo1} />
                            </div> */}
                        </div>
                            {/* <div className="container-all">
                                <img alt="logo1" src={logo1} />
                            </div> */}


                            {!isErrorMsg ? (
                                <div className="container-all1">
                                    <img alt="logo1" src={logo1} />
                                </div>
                            ) : (
                                <div className="container-all2">
                                    <img alt="logo1" src={logo1} />
                                </div>
                            )}

                    </div>
                ) : (<div><Dashboard /></div>)}
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;