import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './preview.css';

const { Footer, Sider, Content, Header } = Layout;

class preview extends Component {
    render() {
        return (

            
            <div className="pre">


                <p className="p">Test File</p>
                <Button type="primary" value= "small" className="btnclr">Upload</Button>
                <Button type="primary" value= "small" className="btnspc">Run</Button>

                <div className="pre1">
                    <p className="p1">Result</p>
                    <Button type="primary" value= "small" className="btnclr1">All</Button>
                    <Button type="primary" value= "small" className="btnspc">Match</Button>
                    <Button type="primary" value= "small" className="btnspc">Fail</Button>

                </div>
                <Layout>
                    <Header className= "hdr">

                    </Header>
                </Layout>
            </div>
          
         
        );
    }
}
export default preview;
