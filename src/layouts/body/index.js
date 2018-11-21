import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Layout } from 'antd';
import Headers from '../header';
import Footers from '../footer';
import Breadcumb from '../../components/breadcrumb';
import Routes from './../../pages/routes/Routes';

class Body extends Component {

    render() {
        return (
            <Layout>
                <Headers />
                <Layout>
                  {/*  <Breadcumb /> */}
                   <Routes/>
                </Layout>
                <Footers />
            </Layout>
        );
    }
}
export default Body;