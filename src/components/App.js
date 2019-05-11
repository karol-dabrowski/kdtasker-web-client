import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {CssBaseline} from "@material-ui/core";
import Home from '../pages/HomePage'

class App extends Component {
    render() {
        return (
            <div className="app">
                <CssBaseline/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        );
    };
}

export default App;
