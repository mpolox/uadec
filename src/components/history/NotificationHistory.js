import React, { Component } from 'react';

export class NotificationHistory extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card grey lighten-3">
              <div className="card-content">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                <p className="grey-text right">This is the date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotificationHistory
