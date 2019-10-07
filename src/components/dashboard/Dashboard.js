import React, { Component } from 'react';
import NotificationList from './NotificationList';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <NotificationList notifications={notifications} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: "notifications"}
  ])
)((Dashboard))
