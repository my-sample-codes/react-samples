
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SourceDefinition from './../source-definition/SourceDefinition';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import Login from './../login/LoginForm';
import SiderLayout from './../../layouts/layout2/SiderLayout'
export default class Routes2 extends Component {

    render() {
        return (
            <div>
                <Router>
                        <div >
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={SiderLayout}
                                />
                                <Route
                                    exact
                                    path="/SourceDefinition"
                                    component={SourceDefinition}
                                />
                                <Route
                                    exact
                                    path="/LayoutDefinition"
                                    component={LayoutDefinition}
                                />
                                <Route
                                    exact
                                    path="/RecordTokenizer"
                                    component={RecordTokenizer}
                                />
                                {/* <Route
                                    exact
                                    path="/SiderLayout"
                                    component={SiderLayout}
                                /> */}
                            </Switch>
                        </div>
                </Router>
            </div>
        );
    }
}