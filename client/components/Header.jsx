import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return (
            <header className="navbar">
                <section className="navbar-section">
                    <Link to="/" className="navbar-brand mr-10">Main</Link>
                    <Link to="/about" className="btn btn-link">About</Link>
                    <Link to="/params/3" className="btn btn-link">Params</Link>
                </section>
                <section className="navbar-section">
                </section>                
            </header>        
        )
    }

}