import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';

import axios from 'axios';

import 'antd/dist/antd.css';
import './index.css';
import './Login.css';

import AdminSingInImg from './admin_sign.png';
import BackgroundImg from './loginimg.png';

const FormItem = Form.Item;

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validate: true,
            msg : "abc"
        };
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //Please put your backend url
    //    var apiBaseUrl = "http://localhost:8090/SpringBootApplicationRestApi/api/"
            var apiBaseUrl = "http://localhost:8080/recon/"
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                //please used below password & userName variable for POJO class
                console.log('Received values of form: ', values.password);
                console.log('Received values of form: ', values.userName);
                console.log("Object", values)

                //post method for login 
                axios.post(apiBaseUrl + 'login', values)
                    .then(function (response) {                   //call handler after successful functioning
                        console.log("All Response - ", response);
                        console.log("Response Status Code - ", response.status)
                        console.log("Response Code - ", response.data.code)
                       
                        if(response.data==="email & password exists"){
                            alert("Login Successfull");
                            this.setState({msg: "Login Successfull"});
                            console.log("msg",this.msg);
                        }
                        else if(response.data==="email Not exists"){
                            this.setState({msg: "Invalid User"});
                            alert("Invalid User");
                        }

                        else if(response.data==="password invalid"){
                            this.setState({msg: "Invalid Password"});
                            alert("Invalid Password");
                        }
                        
                      /*   if (response.status === 200) {
                            console.log("Login successfull");              //for printing on console
                            alert("Login successfull");
                            this.setState({validate: true});
                        }
                        else{
                            console.log("::::in else");
                            alert("Username /Password invalid");
                        } */
                       /*  else if (response.status === 401) {
                           console.log("Username password do not match");
                            this.setState({validate: true});
                            alert("username password do not match")
                            
                        }
                        else {
                            console.log("Username does not exists");
                            alert("Username does not exist");
                            this.setState({validate: false});
                        } */
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div> <div className="bg-img-div">
                <img className='bg' src={BackgroundImg} />
            </div>
                <div>
                    <Layout className="login-form-layout">
                        <Form onSubmit={this.handleSubmit} className="login-form">
        {this.msg ? <p>{this.msg}</p> : null}
        console.log(this.msg);
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                <div>
                                    <div className="login-form-checkbox">
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: false,
                                        })(
                                            <Checkbox>Remember me</Checkbox>
                                        )}
                                    </div>
                                    <div className="login-form-forgot"><span><Icon type="lock" /><span>
                                        <a href="#forgotPass"> Forgot pwd?</a></span></span>
                                    </div>
                                </div>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Sign In
                        </Button>
                                {/* <div className="register-now">
                            Or <a href="">register now!</a>
                        </div> */}
                            </FormItem>
                            <div>
                                <img className="info-img-icon" src={AdminSingInImg} />
                            </div>
                        </Form>
                    </Layout>
                </div>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;