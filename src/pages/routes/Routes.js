
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './../source-definition/SourceDefinition';
import LayoutDefinition from './../layout-definition/LayoutDefinition';
import RecordTokenizer from './../record-tokenizer/RecordTokenizer';
import Home1 from './../main-board/mainBoard';
import TaskDesign from './../taskDesign/taskDesign';

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
                                    path="/Home"
                                    component={Home}
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
                                 <Route
                                    exact
                                    path="/TaskDesign"
                                    component={TaskDesign}
                                />
                            </Switch>
                        </div>
                </Router>
            </div>
        );
    }
}