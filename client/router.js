import React from 'react';
import { Route, Switch } from 'react-router'; 
import { HashRouter } from 'react-router-dom';

import Header from './components/Header.jsx';
import App from './components/App.jsx';
import About from './components/about/About.jsx';
import Params from './components/params/Params.jsx';
import RouteNotFound from './components/404/RouteNotFound.jsx';

export default () => {
    return (
        <HashRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/params/:id" component={Params} />
                    <Route component={RouteNotFound} />
                </Switch>
            </div>
        </HashRouter>        
    )
}