import React from 'react';

export default class About extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="columns">
                    <div className="column col-3 text-center centered">

                        <div className="empty">
                            <div className="empty-icon">
                            <i className="icon icon-people"></i>
                            </div>
                            <h4 className="empty-title">You have no new messages</h4>
                            <p className="empty-subtitle">Click the button to start a conversation.</p>
                            <div className="empty-action">
                                <button className="btn btn-primary">Send a message</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}