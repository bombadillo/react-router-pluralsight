import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import App from './components/App.jsx';
import About from './components/about/About.jsx';
import Params from './components/params/Params.jsx';
import { Route } from 'react-router'; 
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <div className="container">
            <Header />
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/params/:id" component={Params} />
        </div>
    </HashRouter>, 
    document.getElementById('root')
);