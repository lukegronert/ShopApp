import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './Shop';

export default function Routes() {
    return (
        <Router basename='/'>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/shop' component={Shop} /> 
            </Switch>
        </Router>
    )
}
