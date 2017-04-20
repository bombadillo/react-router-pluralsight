import React from 'react';

import iconStyles from '../../styles/icons.css';

export default class NotFoundRoute extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column col-3 text-center centered">

                        <div className="empty">
                            <div className={'empty-icon ' + iconStyles.icon}>
                                <i className="icon icon-flag"></i>
                            </div>
                            <h4 className="empty-title">Page not found</h4>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}