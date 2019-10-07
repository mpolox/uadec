import React from 'react';
import Notification from "./Notification"

const NotificationList = ({ notifications }) => {
  return (
    <div>
      { notifications && notifications.map(n => {
        return(
          <Notification notification={n} key={n.id}></Notification>
        )
      })}
    </div>
  )
}

export default NotificationList;