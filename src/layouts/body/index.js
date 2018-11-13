import 'antd/dist/antd.css';
import React, { Component } from 'react';
import Headers from '../header';
import Footers from '../footer';
import Table from '../../components/table'
import Breadcumb from '../../components/breadcrumb'
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