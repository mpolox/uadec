import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';

const NotificationDetails = (props) => {
  const { notification } = props;
  console.log("=========================",notification);
  if (notification) {
    return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <div className="card z-depth-0 teal lighten-1"> 
          <div className="card-content white-text">
            <span className="card-title">{notification.title}</span>
            <p>{notification.message}</p>
          </div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div>loading...</div>
    )
  }
}

const mapStateToProps = (state, myProps) => {
  const id = myProps.match.params.id;
  const notifications = state.firestore.data.notifications;
  const notification = notifications ? notifications[id] : null;
  console.log("------", notification, "-------");
  return{ notification:notification }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: "notifications"
  }])
) (NotificationDetails)