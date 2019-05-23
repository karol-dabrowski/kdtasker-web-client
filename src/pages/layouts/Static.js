import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from "../HomePage";

class Static extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                </Switch>
            </Router>
        );
    }
}

export default Static;