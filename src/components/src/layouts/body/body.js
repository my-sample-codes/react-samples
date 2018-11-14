import 'antd/dist/antd.css';
import React, { Component } from 'react';
import Headers from './../header/header';
import Footers from './../footer/footer';
import Table from './../../components/table/table'
import Breadcumb from './../../components/breadcrumb/breadcumb'
import { Layout } from 'antd';

class Body extends Component {

    render() {
        return (
            <Layout>
                <Headers />
                <Layout>
                    <Breadcumb />
                    <Table />
                </Layout>

                <Footers />
            </Layout>

        );
    }
}
export default Body;