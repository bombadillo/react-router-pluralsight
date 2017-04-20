import React from 'react';

export default class Params extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="columns">
                    <div className="column col-3 text-center centered">

                        <div className="empty">
                            <div className="empty-icon">
                            <i className="icon icon-people"></i>
                            </div>
                            <h4 className="empty-title">Your parameter is {this.props.match.params.id}</h4>
                        </div>

                    </div>
                </div>
            </div>
        )
    }    

}