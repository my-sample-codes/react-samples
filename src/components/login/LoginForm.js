import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, Layout } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import './Login.css';

import imgTMob from '../../images/tmimg.png';

const FormItem = Form.Item;

class LoginForm extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
        }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
             <Layout className="login-form-layout">
                <Form onSubmit={this.handleSubmit} className="login-form">
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
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign In
                    </Button>
                        <div className="register-now">
                            Or <a href="">register now!</a>
                        </div>
                    </FormItem>
                    <div>
                        <img className="info-img-icon" src={ imgTMob } />
                    </div>
                </Form>
            </Layout>  
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;