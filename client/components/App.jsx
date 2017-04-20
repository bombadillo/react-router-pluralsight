import React from 'react';

require("!style-loader!css-loader!spectre.css/dist/spectre.min.css");
require("!style-loader!css-loader!spectre.css/dist/spectre-icons.min.css");

import iconStyles from '../styles/icons.css';

export default class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column col-3 text-center centered">

                        <div className="empty">
                            <div className={'empty-icon ' + iconStyles.icon}>
                            <i className="icon icon-apps"></i>
                            </div>
                            <h4 className="empty-title">Home</h4>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}