
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SourceDefinition from './../source-definition/SourceDefinition';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import Home from './../main-board/mainBoard';
//import Home from './../login/LoginForm';

export default class Routes extends Component {

    render() {
        return (
            <div>
                <Router>
                        <div >
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Home}
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
                            </Switch>
                        </div>
                </Router>
            </div>
        );
    }
}