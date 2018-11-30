import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import Dashboard from '../dashboard/DashboardLand';
import BackgroundImg from './../../assets/images/login_background_img.svg';
import logo from './../../assets/logos/logo.png';
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from 'react-router-dom';
import logo1 from './../../assets/logos/logo-blue.png';
import welcome from './../select-role/welcome'
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
                            console.log("After return", this.state.validate);
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

        if(this.state.validate)
        {
           return <Redirect to="/welcome"/>
        }
        const { getFieldDecorator } = this.props.form;
        const isValidated = this.state.validate;
        const isErrorMsg = this.state.error_msg;
        return (
            <div style={{overflow:'hidden'}} className="loginMaindiv">
        
                    <div>
                        <div className="backgroundImg">
                            <img src={BackgroundImg} />
                        </div>
                        
                        <div className="formdiv">
                            <Form onSubmit={this.handleSubmit} className="loginForm">
                                <div>
                                    <img alt="logo" src={logo} className="optimusLogo"/>
                                    <h1 className="optimusTitle">Optimus</h1>
                                </div>
                                {/* {!isErrorMsg ? (<div></div>) : (<Alert style={{ marginTop: '46px' }} message={'Invalid username or password'} type="error" showIcon />)} */}

                                <FormItem className='loginFormItem'>
                                    {!isErrorMsg ? (<div></div>) : (<Alert className="loginAlert" message={'Invalid username or password'} type="error" showIcon />)}

                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please enter username!' }],
                                    })(
                                        <Input prefix={<Icon className="loginIcons" type="user"/>} placeholder=" Username" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please enter password!' }],
                                    })(
                                        <Input prefix={<Icon className="loginIcons" type="lock"/>} type="password" placeholder=" Password" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    <div>
                                        <div className="loginCheckbox">
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true,
                                            })(
                                                <Checkbox>Remember me</Checkbox>
                                            )}
                                        </div>
                                        <div className="loginForgotPwd">
                                            <a href="#forgotPass">Forgot your password?</a>
                                        </div>
                                    </div>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" onClick={this.handleClick} className="loginButton">
                                        Login
                                    </Button>
                                </FormItem>
                            </Form>
                        </div>
                        {!isErrorMsg ? (
                            <div className="bottomLogo">
                                <img alt="logo1" src={logo1} />
                            </div>
                        ) : (
                            <div className="bottomLogo_2">
                                <img alt="logo1" src={logo1} />
                            </div>
                        )}
                   
                    </div>
               
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;