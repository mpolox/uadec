import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

const Notification = ({ notification }) => {

  const date = moment(notification.createdAt.toDate()).calendar(); 
  moment.locale('es');

  return (
    <NavLink to={'/notification/'+ notification.id}>
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title grey-text">{ notification.title}</span>
              <p className="grey-text">{notification.message}</p>
              <p className="grey-text right">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </NavLink>
  )
}

export default Notification