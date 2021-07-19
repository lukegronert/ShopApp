import React from 'react';
// Use HashRouter because BrowserRouter does not work with gh-pages
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './Shop';

export default function Routes() {
    return (
        // Must include basename in Router when using HashRouter
        <Router basename='/'>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/shop' component={Shop} /> 
            </Switch>
        </Router>
    )
}
