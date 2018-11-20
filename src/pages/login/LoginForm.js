import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
import BackgroundImg from './loginBgOptimusImg.png';
import Dashboard from '../dashboard-landing/DashboardLand';
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
                .then(function (response) {                   //call handler after successful functioning
                    console.log("All Response - ", response);
                    console.log(JSON.stringify(response));
                    console.log("Response Status Code - ", response.status)
                    
                    if (response.status === 302) {
                        console.log("Login successfull");              //for printing on console
                        this.setState({ validate: true });
                        this.setState({ error_msg: false });
                        console.log("After return",this.state.validate);
                    }
                    else if (response.status === 404) {
                        console.log("Username password do not match");
                        // alert("username password do not match")
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
            <div>
                {/* {!isValidated ? (
                    <div> <div className="bg-img-div">
                        <img className='bg' src={BackgroundImg} />
                    </div>
                        <div>
                            <Layout className="login-form-layout">
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                {!isErrorMsg ? (<div></div>) : (<div className="error-msg">Incorrect Username/Password</div>)}
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
                                        <Button type="primary" htmlType="submit" onClick={this.handleClick} className="login-form-button">
                                            Sign In
                                        </Button>
                                    </FormItem>
                                    {/* <div>
                                        <img className="info-img-icon" src={AdminSingInImg} />
                                    </div> }
                                </Form>
                            </Layout>
                        </div>
                    </div>
                ) : (<div><Dashboard /></div>)} */}
                <Dashboard />

            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;
